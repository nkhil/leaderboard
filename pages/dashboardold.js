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
  const [clientSecret, setClientSecret] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isFirstTimeViewingApiKey, setIsFirstTimeViewingApiKey] = useState(false);
  const [shouldMakeNewApiKey, setShouldMakeNewApiKey] = useState(false);
  const [userHasApiKey, setUserHasApiKey] = useState(false);

  // Redirect if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/");
    } else if (auth.user) {
      setUserId(auth.user.uid)
    }
  }, [auth, router]);

  const { data, error } = useSWR((userId && !isFirstTimeViewingApiKey) ? `/api/key?userId=${userId}` : null, fetcher)

  // Check if user has an API key and set it
  useEffect(() => {
    if (data && data.length) {
      console.log('data!!', data);
      setClientId(data[0].clientId);
      setUserHasApiKey(true);
    } else {
      setUserHasApiKey(false);
    }
  }, [data])

  console.log('shouldMakeNewApiKey', shouldMakeNewApiKey);
  console.log('userHasApiKey', userHasApiKey);
  console.log('isFirstTimeViewingApiKey', isFirstTimeViewingApiKey);

  const { apiKeyData, apiKeyError } = useSWR(shouldMakeNewApiKey ? `/api/apikey?userId=${userId}` : null, fetcher);
  console.log('apiKeyData', apiKeyData);

  useEffect(() => {
    console.log('here')
    console.log(apiKeyData)
    console.log('here')
    if (apiKeyData) {
      console.log('in here!');
      console.log(apiKeyData);
      setShouldMakeNewApiKey(false);
      setIsFirstTimeViewingApiKey(true);
      setUserHasApiKey(true);
      console.log('apiKeyData!!', apiKeyData);
      const { clientId, clientSecret, apiKey } = apiKeyData;
      console.log('apiKey', apiKey)
      console.log('clientSecret', clientSecret)
      console.log('clientId', clientId)
      setClientId(clientId);
      setClientSecret(clientSecret);
      setApiKey(apiKey);
    }
  }, [apiKeyData])

  useEffect(() => {
    if (apiKeyError) {
      console.log('apiKeyError!!', apiKeyError);
    }
  }, [apiKeyError])

  // if (apiKeyData) {
  //   §
  //   console.log('apiKey', apiKey)
  //   console.log('clientSecret', clientSecret)
  //   console.log('clientId', clientId)
  //   setClientId(clientId);
  //   setClientSecret(clientSecret);
  //   setApiKey(apiKey);
  //   setIsNewApiKey(true);
  // }

  // if (apiKeyError) {
  //   setNewApiKeyErr(apiKeyError)
  // }

  // Show loading until we have user
  if (!auth.user) {
    return "Loading...";
  }

  const handleClickNewApiKey = () => {
    setIsFirstTimeViewingApiKey(true);
    setShouldMakeNewApiKey(true);
  }

  // const createNewApiKey = async () => {
  //   setLoading(true);
  //   const { data, error } = await useSWR(`/api/apikey?userId=${userId}`, fetcher);
  //   if (error) {
  //     setNewApiKeyErr(true);
  //     setLoading(false);
  //   }

  //   if (data) {
  //     const { clientId, clientSecret, apiKey } = data;
  //     setClientId(clientId);
  //     setClientSecret(clientSecret);
  //     setApiKey(apiKey);
  //     setIsNewApiKey(true);
  //   }
  // }

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

  if (isFirstTimeViewingApiKey) {
    return (
      <>
        <Head>
          <title>Leaderboard API: Dashboard</title>
        </Head>
        <WideContainer>
          <Container>
            <>
              <TextField
                id="filled-basic"
                disabled
                value={clientId}
                style={{ width: 300 }}
                label="Client ID"
              />
              <TextField
                id="standard-disabled"
                disabled
                value={clientSecret}
                style={{ width: 300 }}
                label="Client secret"
              />
              <TextField
                id="standard-disabled"
                disabled
                value={apiKey}
                style={{ width: 300 }}
                label="API key"
              />
              <div>
                <p>
                  Your client secret & API key will not be displayed again. Please make note of it!
                </p>
                <button
                  onClick={() => setIsFirstTimeViewingApiKey(false)}
                >
                  I've noted these down
                </button>
              </div>
            </>
          </Container>
        </WideContainer>
      </>
    )
  }

  if (userHasApiKey && !isFirstTimeViewingApiKey) {
    return (
      <>
        <Head>
          <title>Leaderboard API: Dashboard</title>
        </Head>
        <WideContainer>
          <Container>
            <TextField
              id="filled-basic"
              disabled
              value={clientId}
              style={{ width: 300 }}
              label="Client ID"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={'Hidden'}
              style={{ width: 300 }}
              label="Client password"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={'Hidden'}
              style={{ width: 300 }}
              label="API key"
            />
            <div>
              <p>
                Note: If you’ve lost either your client secret, or API key, you will need to generate a new API key
                </p>
            </div>
          </Container>
        </WideContainer>
      </>
    )
  }

  if (!userHasApiKey) {
    return (
      <h2>
        You don't have an API key.
        <Button
          text={'Create API Key'}
          isInternal={true}
          apiCall={true}
          onClick={handleClickNewApiKey}
        />
      </h2>
    )
  }
  return (
    <>
      <Head>
        <title>Leaderboard API: Dashboard</title>
      </Head>
      <WideContainer>
        <Container>
          <h2>Something went wrong. Please try again.</h2>
        </Container>
      </WideContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}
