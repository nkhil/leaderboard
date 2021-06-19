import React, { useState } from "react";
import { FormLabel, Input, FormControl, InputLeftElement, InputGroup, Stack, Icon, Button, Box, Flex } from "@chakra-ui/react";
import { BiLock, BiEnvelope, BiUserCircle, BiInfoCircle, BiCheckCircle } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useAuth } from '../../utils/authProvider';

function SignUpForm() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      await auth.signup(email, password)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Email is already in use')
      }
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      await auth.signinWithProvider('google');
    } catch (error) {

    }
  }

  return (
    <Box bg='gray.100' p={6} borderRadius='5px'>
      <form action='submit' onSubmit={handleFormSubmit}>
        <Stack spacing={2}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiEnvelope} />} />
              <Input onChange={handleEmailChange} type='email' placeholder='Email' aria-label='email' bg='white' />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiLock} />} />
              <Input onChange={handlePasswordChange} type='password' placeholder='Password' aria-label='password' bg='white' />
            </InputGroup>
          </FormControl>
          <Button type='submit' rightIcon={<BiCheckCircle size={20} />} bg={'brand.200'} color={'white'}>Sign up</Button>
          <Button onClick={handleSignUpWithGoogle} leftIcon={<AiFillGoogleCircle size={20} />} colorScheme='blue' type='button'>Sign up using Google</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SignUpForm;
