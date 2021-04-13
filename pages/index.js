import Head from 'next/head';
import Hero from '@components/Hero';
import SectionOne from '@components/SectionOne';
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leaderboard API: A simple API to create scoreboards and leaderboards</title>
      </Head>
      <Box>
        <Hero />
        <SectionOne />
      </Box>
    </>
  );
}
