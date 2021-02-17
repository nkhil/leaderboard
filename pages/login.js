import Head from 'next/head';
import Hero from '@components/Hero';
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from '@components/Navbar';
import Form from '@components/AuthForm';
import { useRouter } from "next/router";
import { useAuth } from "../utils/authProvider";
import React, { useEffect } from "react";
import { createGlobalStyle } from 'styled-components';

export default function Account() {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      router.push("/dashboard");
    }
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>Leaderboard API: Sign in or Register</title>
      </Head>
      <Box>
        <Flex justifyContent="center">
          <Flex
            p={2}
            pb={12}
            width={{
              sm: "30em",
              md: "48em",
              lg: "62em",
              base: "62em",
            }}
            alignItems='center'
            // justifyContent='center'
            flexDirection='column'
          // height='100vh'
          >
            <Form />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
