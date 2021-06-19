import React, { useState, useEffect } from "react";
import {
  useToast,
  FormLabel,
  Input,
  FormControl,
  InputLeftElement,
  InputGroup,
  Stack,
  Icon,
  Button,
  Box
} from "@chakra-ui/react";
import { BiLock, BiEnvelope } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useAuth } from '../../utils/authProvider';
import constants from '../../constants';

function getErrorMessage(googleErrorCode) {
  const errorCodeExists = constants.authErrorCodes.includes(googleErrorCode)
  return {
    title: errorCodeExists ? 'Invalid login credentials' : 'Unknown error occured',
    body: errorCodeExists ? 'Something went wrong. Please try again or reset your credentials' : 'Unable to log you in'
  }
}

function SignInForm() {
  const auth = useAuth();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setShowToastMessage] = useState(null);

  useEffect(() => {
    if (toastMessage) {
      const { title, body } = toastMessage;
      toast({
        title,
        description: body,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
    }
  }, [toastMessage, toast]);

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(`Attempting to sign in using ${email} and ${password}`)
      await auth.signin(email, password)
    } catch (error) {
      console.log('error code', error.code);
      const { title, body } = getErrorMessage(error.code);
      setShowToastMessage({ title, body })
    }
  }
  const handleSignInWithGoogle = async () => await auth.signinWithProvider('google');

  return (
    <Box bg='#fff' p={6} borderRadius='5px' w='350px' border='1px solid #eaecef'>
      <form action='submit' onSubmit={handleFormSubmit}>
        <Stack spacing={2}>
          <FormControl isRequired>
            <FormLabel>
              Email
            </FormLabel>
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
