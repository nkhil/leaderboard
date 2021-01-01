import Head from 'next/head';
import { useRouter } from "next/router";
import { useAuth } from "../utils/authProvider";
import React, { useEffect, useState } from "react";
import { connectToDatabase } from '../utils/mongodb';
import useSWR from 'swr';
import styled from 'styled-components';
import WideContainer from '@components/WideContainer';
import Container from '@components/Container';
import theme from '../constants/theme';
import { TextField } from '@material-ui/core';
import Button from '@components/Button';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Dashboard({ isConnected }) {
  const auth = useAuth();
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [getInitialData, setGetInitialData] = useState(true);
  const [shouldMakeNewApiKey, setShouldMakeNewApiKey] = useState(false);
  const [shouldDisplayApiKey, setShouldDisplayApiKey] = useState(false);
  const [dataExists, setDataExists] = useState(false);
  // Redirect if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/");
    } else if (auth.user) {
      setUserId(auth.user.uid)
    }
  }, [auth, router]);

  const { data, error } = useSWR((userId && getInitialData) ? `/api/key?userId=${userId}` : null, fetcher)

  useEffect(() => {
    if (data && data.length === 0) {
      // if the user does not have an API key
      // stop loading data like you would
      setGetInitialData(false);
    } else if (data && data.length) {
      const { clientId } = data[0];
      setClientId(clientId);
      setDataExists(true);
    }
  }, [data])

  const { data: apiKeyData, error: apiKeyError } = useSWR((userId && shouldMakeNewApiKey) ? `/api/something?userId=${userId}` : null, fetcher);

  useEffect(() => {
    if (apiKeyData) {
      console.log('🚀 ~ file: dashboard.js ~ line 55 ~ useEffect ~ apiKeyData', apiKeyData)
      const {
        clientId,
        clientSecret,
        apiKey,
      } = apiKeyData
      setClientId(clientId);
      setClientSecret(clientSecret);
      setApiKey(apiKey);
      setShouldDisplayApiKey(true);
      setShouldMakeNewApiKey(false);
      setDataExists(true);
    }
  }, [apiKeyData])

  const handleGenerateNewApiKeyButton = () => {
    setShouldMakeNewApiKey(true);
  }

  // if no database connection...
  if (!isConnected) {
    return (
      <>
        <WideContainer>
          <Container>
            <h2>Sorry, we're currently facing issues getting your details - Please try again shortly.</h2>
          </Container>
        </WideContainer>
      </>
    )
  }

  if (!getInitialData && !shouldDisplayApiKey && !dataExists) {
    return (
      <>
        <h2>You don't have an API key</h2>
        <Button
          text={'Create API Key'}
          isInternal={true}
          apiCall={true}
          onClick={handleGenerateNewApiKeyButton}
        />
      </>
    )
  }

  if (shouldDisplayApiKey) {
    return (
      <>
        <h2>{clientId} {clientSecret} {apiKey}</h2>
        <button onClick={() => setShouldDisplayApiKey(false)}>I've made a note of this</button>
      </>
    )
  }

  if (dataExists) {
    return (
      <>
        <h2>Your clientId is {clientId}</h2>
      </>
    )
  }

  return (
    <>
      <h2>Loading...</h2>
    </>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}
