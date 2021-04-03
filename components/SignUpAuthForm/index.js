import { Box, Tabs, Tab, TabList, TabPanels, TabPanel, Flex, Spacer, Text } from "@chakra-ui/react";
import SignUpForm from '@components/SignUpForm';

function AuthForm() {
  return (
    <Box marginLeft={{ base: 0, md: 'auto' }} margin={{ base: 'auto', md: 'inherit' }}>
      <SignUpForm />
    </Box>
  )
}

export default AuthForm;
