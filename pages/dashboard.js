import Head from 'next/head';
import { useRouter } from "next/router";
import { useAuth } from "../utils/authProvider";
import React, { useEffect, useState } from "react";
import useSWR from 'swr';
import CredentialsBox from '@components/CredentialsBox';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Dashboard() {
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
    console.log('Clicked!')
    setShouldMakeNewApiKey(true);
  }

  if (!getInitialData && !shouldDisplayApiKey && !dataExists) {
    return (
      <>
        <CredentialsBox
          status={'NO_API_KEY'}
          onClick={handleGenerateNewApiKeyButton}
          credentials={{
            clientId,
            clientSecret,
            apiKey,
          }}
        />
      </>
    )
  }

  if (shouldDisplayApiKey) {
    return (
      <>
        <CredentialsBox
          status={'NEW_API_KEY'}
          onClick={() => setShouldDisplayApiKey(false)}
          credentials={{
            clientId,
            clientSecret,
            apiKey,
          }}
        />
      </>
    )
  }

  if (dataExists) {
    return (
      <>
        <CredentialsBox
          status={'EXISTING_API_KEY'}
          onClick={() => { }}
          credentials={{
            clientId,
            clientSecret,
            apiKey,
          }}
        />
      </>
    )
  }

  return (
    <>
      <h2>Loading...</h2>
    </>
  )
}
