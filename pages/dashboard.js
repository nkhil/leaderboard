import { useRouter } from "next/router";
import Head from 'next/head';
import { useAuth } from "../utils/authProvider";
import React, { useEffect, useState } from "react";
import useSWR from 'swr';
import CredentialsBox from '@components/CredentialsBox';
import Navbar from '@components/Navbar';
import LoadingScreen from '@components/LoadingScreen';
import Footer from '@components/Footer';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Dashboard() {

  <Head>
    <title>Leaderboard API: Dashboard</title>
  </Head>

  const auth = useAuth();
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [apiKeys, setApiKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getInitialData, setGetInitialData] = useState(true);
  const [shouldDisplayApiKey, setShouldDisplayApiKey] = useState(false);
  const [shouldMakeNewUserCreds, setShouldMakeNewUserCreds] = useState(false);
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
    // if the user does not have at least 1 API key
    // stop trying to load api key data
    if (data && data.length === 0) {
      setGetInitialData(false);
    } else if (data && data.length) {
      const [{ clientId }] = data;
      setClientId(clientId);
      setDataExists(true);
    }
  }, [data])

  const { data: userCreds, error: userCredsError } = useSWR((userId && shouldMakeNewUserCreds) ? `/api/user-creds?userId=${userId}` : null, fetcher);

  useEffect(() => {
    if (userCreds) {
      console.log('usercreds', userCreds);
      setShouldMakeNewUserCreds(false);
      const {
        clientId,
        clientSecret,
      } = userCreds
      setClientId(clientId);
      setClientSecret(clientSecret);
      setShouldDisplayApiKey(true);
      setDataExists(true);
    }
  }, [userCreds])

  const handleGenerateNewApiKeyButton = () => {
    console.log('Making new user creds!')
    setShouldMakeNewUserCreds(true);
  }

  if (!getInitialData && !shouldDisplayApiKey && !dataExists) {
    return (
      <>
      <Navbar />
        <CredentialsBox
          status={'NO_API_KEY'}
          onClick={handleGenerateNewApiKeyButton}
          credentials={{
            clientId,
            clientSecret,
          }}
        />
      <Footer />
      </>
    )
  }

  if (shouldDisplayApiKey) {
    return (
      <>
        <Navbar />
        <CredentialsBox
          status={'NEW_API_KEY'}
          onClick={() => setShouldDisplayApiKey(false)}
          credentials={{
            clientId,
            clientSecret,
          }}
        />
        <Footer />
      </>
    )
  }

  if (dataExists) {
    return (
      <>
        <Navbar />
        <CredentialsBox
          status={'EXISTING_API_KEY'}
          onClick={() => { }}
          credentials={{
            clientId,
            clientSecret,
          }}
        />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <LoadingScreen />
    </>
  )
}
