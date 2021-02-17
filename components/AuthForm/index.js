import { Box, Tabs, Tab, TabList, TabPanels, TabPanel, Flex, Spacer, Text } from "@chakra-ui/react";
import SignUpForm from '@components/SignUpForm';
import SignInForm from '@components/SignInForm';
import Logo from '@components/Logo'

function AuthForm() {
  return (
    <Box marginLeft={{ base: 0, md: 'auto' }} margin={{ base: 'auto', md: 'inherit' }}>
      <Flex flexDirection='column' bg='black' borderRadius='md' alignItems='center' py={6} my={10}>
        <Text fontSize='md' color='white'>Sign in</Text>
        <Logo />
      </Flex>
      <SignInForm />
    </Box>
  )
}

export default AuthForm;
