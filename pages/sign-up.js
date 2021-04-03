import Head from 'next/head';
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Form from '@components/SignUpAuthForm';
import { useRouter } from "next/router";
import { useAuth } from "../utils/authProvider";
import React, { useEffect } from "react";

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
        <title>Leaderboard API: Sign up</title>
      </Head>
      <Box
        bg={'brand.200'}
        height={'100vh'}
      >
        <Flex height={'100vh'}>
          <Flex
            width={'100%'}
            alignItems='center'
            justifyContent="center"
            flexDirection='column'
          >
            <Form />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
