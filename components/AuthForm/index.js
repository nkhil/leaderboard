import { Box, Tabs, Tab, TabList, TabPanels, TabPanel, Flex, Spacer, Text } from "@chakra-ui/react";
import SignUpForm from '@components/SignUpForm';
import SignInForm from '@components/SignInForm';
import Logo from '@components/Logo'

function AuthForm() {
  return (
    <Box marginLeft={{ base: 0, md: 'auto' }} margin={{ base: 'auto', md: 'inherit' }}>
      <SignInForm />
    </Box>
  )
}

export default AuthForm;
