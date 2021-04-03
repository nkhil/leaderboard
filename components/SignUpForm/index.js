import { FormLabel, Input, FormControl, InputLeftElement, InputGroup, Stack, Icon, Button, Box } from "@chakra-ui/react";
import { BiLock, BiEnvelope, BiUserCircle, BiInfoCircle, BiCheckCircle } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useAuth } from '../../utils/authProvider';

function SignUpForm() {
  const auth = useAuth();
  const handleSignUpWithGoogle = () => auth.signinWithProvider('google');
  return (
    <Box padding={'20px'} bg='gray.100' p={6} borderRadius='5px' w='400px'>
      <form action='submit'>
        <Stack spacing={2}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiEnvelope} />} />
              <Input type='email' placeholder='Email' aria-label='email' bg='white' />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiLock} />} />
              <Input type='password' placeholder='Password' aria-label='password' bg='white' />
            </InputGroup>
          </FormControl>
          <Button rightIcon={<BiCheckCircle size={20} />} type='submit' bg={'brand.200'} color={'white'}>Sign up</Button>
          <Button onClick={handleSignUpWithGoogle} leftIcon={<AiFillGoogleCircle size={20} />} colorScheme='blue' type='button'>Sign up using Google</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SignUpForm;
