import React, { useEffect, useState } from "react";
import { FormLabel, Input, FormControl, InputLeftElement, InputGroup, Stack, Icon, Button, Box } from "@chakra-ui/react";
import { BiLock, BiEnvelope, BiUserCircle, BiInfoCircle, BiCheckCircle } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useAuth } from '../../utils/authProvider';

function SignInForm() {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleFormSubmit = async () => await auth.signIn(email, password)
  const handleSignInWithGoogle = () => auth.signinWithProvider('google');

  return (
    <Box bg='#fff' p={6} borderRadius='5px' w='350px' border='1px solid #eaecef'>
      <form action='submit'>
        <Stack spacing={2}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiEnvelope} />} />
              <Input 
                type='email'
                placeholder='Email'
                aria-label='email'
                bg='white'
                onChange={handleEmailChange}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiLock} />} />
              <Input
                type='password'
                placeholder='Password'
                type='password'
                aria-label='password'
                bg='white'
                onChange={handlePasswordChange}
              />
            </InputGroup>
          </FormControl>
          <Button onSubmit={handleFormSubmit} type='submit' bg="#25A979" color='white'>Sign in</Button>
          <Button onClick={handleSignInWithGoogle} leftIcon={<AiFillGoogleCircle size={20} />} type='button' colorScheme='blue'>Sign in using Google</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SignInForm;
