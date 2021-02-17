import theme from '../../constants/theme';
import Image from 'next/image';
import Container from '@components/Container';
import { useAuth } from '../../utils/authProvider';
import { Box, Flex, Text, Heading, Button, Stack } from "@chakra-ui/react";
import Logo from '@components/Logo';
import Navbar from '@components/Navbar';
import { motion } from "framer-motion";

import styled from 'styled-components';

function Hero() {
  const auth = useAuth();
  return (
    <Flex justifyContent="center" bg='#5773ff'>
      <Flex
        p={0}
        pb={12}
        width={{
          sm: "30em",
          md: "48em",
          lg: "62em",
          base: "30em",
        }}
        alignItems='center'
        flexDirection='column'
      >
        <Navbar />
        <motion.div
          animate={{ y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Heading
            as='h2'
            fontSize={{
              base: '4xl',
              md: '4xl',
              lg: '5xl',
            }}
            fontWeight='600'
            color='white'
            textAlign='center'
            px={2}
            my={12}
          >
            A simple API to take the work out of managing users and leaderboards
        </Heading>
        </motion.div>
        {/* <Button
          text={'Get Started'}
          link={'/dashboard'}
          isInternal={true}
          newWindow={false}
        />
        <Button
          text={'Read the docs'}
          link={'/documentation'}
          isInternal={true}
          newWindow={false}
        /> */}
        <Stack spacing={4} direction="column" align="center" >
          <Button as="a" href="/login" colorScheme="white" size="lg" variant="outline" _hover={{ bgColor: '#000', color: '#fff', border: '0' }}>
            Create Account
          </Button>
          <Button colorScheme="white" size="lg" variant="outline" _hover={{ bgColor: '#000', color: '#fff', border: '0' }}>
            Read Documentation
          </Button>

        </Stack>
        {/* <button
          type="button"
          onClick={() => auth.signinWithProvider('google')}
        >
          Sign in with google
        </button>
        <button
          type="button"
          onClick={() => auth.signout()}
        >
          Logout
        </button> */}
      </Flex>
    </Flex >
  );
}

export default styled(Hero)`
  max-width: 1000px;
  color: white;
  padding: 50px 20px;
  margin: auto;

  h2 {
    font-weight: 200;
    font-size: 2.5rem;
    padding: 30px;
    margin-bottom: 20px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    
    padding: 20px 10px;
    
    h2 {
      font-size: 2rem;
      padding: 5px;
      margin-bottom: 20px;
    }
  }
`;
