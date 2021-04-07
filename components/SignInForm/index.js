import React, { useState } from "react";
import { FormLabel, Input, FormControl, InputLeftElement, InputGroup, Stack, Icon, Button, Box } from "@chakra-ui/react";
import { BiLock, BiEnvelope } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useAuth } from '../../utils/authProvider';

function SignInForm() {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      await auth.signin(email, password)
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        console.log('Wrong Password!')
      }
    }
  }
  const handleSignInWithGoogle = async () => await auth.signinWithProvider('google');

  return (
    <Box bg='#fff' p={6} borderRadius='5px' w='350px' border='1px solid #eaecef'>
      <form action='submit' onSubmit={handleFormSubmit}>
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
          <Button type='submit' bg="#25A979" color='white'>Sign in</Button>
          <Button onClick={handleSignInWithGoogle} leftIcon={<AiFillGoogleCircle size={20} />} type='button' colorScheme='blue'>Sign in using Google</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SignInForm;
