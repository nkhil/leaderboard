import { FormLabel, Input, FormControl, InputLeftElement, InputGroup, Stack, Icon, Button, Box } from "@chakra-ui/react";
import { BiLock, BiEnvelope, BiUserCircle, BiInfoCircle, BiCheckCircle } from "react-icons/bi";
import { AiFillGoogleCircle } from "react-icons/ai";

function SignUpForm() {
  return (
    <Box bg='gray.100' p={2} borderRadius='5px' w='300px'>
      <form action='submit'>
        <Stack spacing={2}>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiUserCircle} />} />
              <Input type='text' placeholder='First name' aria-label='First name' bg='white' />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon as={BiUserCircle} />} />
              <Input type='text' placeholder='Last name' aria-label='Last name' bg='white' />
            </InputGroup>
          </FormControl>
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
          <Button rightIcon={<BiCheckCircle size={20} />} type='submit' colorScheme='blue'>Sign up</Button>
          <Button leftIcon={<AiFillGoogleCircle size={20} />} variant="outline" bg='white' type='button'>Sign up using Google</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SignUpForm;
