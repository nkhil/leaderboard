import Head from 'next/head';
import { Box } from "@chakra-ui/react";
import { useAuth } from "../utils/authProvider";
import Navbar from '@components/Navbar';

export default function ForgotClientCredentials() {
  return (
    <>
      <Head>
        <title>Leaderboard API: Forgot client credentials</title>
      </Head>
      <Navbar />
      <Box>
        Here is where we will add things.
      </Box>
    </>
  );
}
