import styled from 'styled-components';
import { useAuth } from "../../utils/authProvider";
// import Button from '@components/Button';
import { TextField } from '@material-ui/core';
import { Box, Flex, Text, Heading, Stack, Button, VStack } from "@chakra-ui/react";
import { Fonts } from 'constants/fonts';


function CredentialsBox({ className, status, onClick, credentials }) {
  const { clientId, clientSecret, apiKey } = credentials;
  const auth = useAuth();
  const STATUSES = {
    noApiKey: 'NO_API_KEY',
    existingApiKey: 'EXISTING_API_KEY',
    newApiKey: 'NEW_API_KEY',
  }
  console.log('USER', auth.user)
  const renderInformation = (status) => {
    const statusIsValid = Object.values(STATUSES).includes(status)
    if (!statusIsValid) throw new Error('Invalid Status supplied')
    switch (true) {
      case status === STATUSES['noApiKey']:
        return (
          <>
            <Flex
              margin='auto'
              p={0}
              pb={12}
              width={{
                sm: "30em",
                md: "30em",
                lg: "50em",
                base: "30em",
              }}
              flexDirection='column'
              justifyContent='center'
            >
            <Box
              marginLeft="50px"
              flexDirection="column"
              marginTop="50px"
            >
              <Heading
                as='h2'
                marginTop="20px"
                marginBottom="10px"
                fontSize={{
                  base: '3xl',
                  md: '2xl',
                  lg: '2xl',
                }}
                fontWeight='700'
                px={0}
              >
              You currently don't have any client credentials
              </Heading>
              <Text as="p">
                Once you create your client credentials, we’ll automatically make an API key for you.
              </Text>
              <Text as="p" marginTop="10px">
                Please note these credentials as they will only be displayed once.
              </Text>
              <Button 
                size="lg" 
                bg="#25A979"
                color="#fff"
                height="40px"
                width="250px"
                borderRadius="5px"
                marginTop="30px"
                _hover={{ bg: "brand.300" }}
                onClick={onClick}
              >
                Create my client credentials
              </Button>
            </Box>
            <button
              type="button"
              onClick={() => auth.signout()}
            >
              Logout
            </button>
            </Flex>
          </>
        )
      case status === STATUSES['newApiKey']:
        return (
          <>
            <Flex
              margin='auto'
              p={0}
              pb={12}
              width={{
                sm: "30em",
                md: "30em",
                lg: "50em",
                base: "30em",
              }}
              flexDirection='column'
              justifyContent='center'
            >
              <Heading
                as='h2'
                marginTop="20px"
                marginBottom="10px"
                fontSize={{
                  base: '3xl',
                  md: '2xl',
                  lg: '2xl',
                }}
                fontWeight='700'
                px={0}
              >
                Please note your credentials
              </Heading>
              <Text as="p" mb={4}>
                These credentials will not be shown again. If you lose them, you will need to generate a new one. All your API keys will need to be generated again as well.
              </Text>
              <Flex
                margin='auto'
                p={12}
                width={{
                  sm: "30em",
                  md: "30em",
                  lg: "50em",
                  base: "30em",
                }}
                flexDirection='column'
                justifyContent='center'
                backgroundColor='#EEEEEE'
              >
                <Flex
                  backgroundColor='#E06969'
                  padding={4}
                  borderRadius='sm'
                  marginBottom={8}
                  width={{
                    sm: "30em",
                    md: "30em",
                    lg: "30em",
                    base: "30em",
                  }}
                >
                  <Text as="p"
                    color='#fff'
                    fontWeight='600'
                  >
                    Note: These credentials will not be shown again. If you lose them, you will need to generate a new one. All your API keys will need to be generated again as well.
                  </Text>
                </Flex>
                <Stack spacing='10px' mb='6' fontFamily={'mono'}>
                  <Box>
                    <Text>
                      Client ID
                    </Text>
                  </Box>
                  <Box>
                    <Text color='brand.200'>
                      {clientId}
                    </Text>
                  </Box>
                </Stack>
                <Stack spacing='10px' mb='6' fontFamily={'mono'}>
                  <Box>
                    <Text>
                      Client Secret
                    </Text>
                  </Box>
                  <Box>
                    <Text color='brand.200' fontWeight='500'>
                      {clientSecret}
                    </Text>
                  </Box>
                </Stack>
              </Flex>
                <Button 
                size="lg" 
                bg="#25A979"
                color="#fff"
                height="40px"
                width="250px"
                borderRadius="5px"
                marginTop="30px"
                _hover={{ bg: "brand.300" }}
                onClick={onClick}
                >
                I have noted it down
              </Button>
              <button
              type="button"
              onClick={() => auth.signout()}
            >sign out</button>
            </Flex>
          </>
        )
      case status === STATUSES['existingApiKey']:
        return (
          <>
            <TextField
              id="filled-basic"
              disabled
              value={clientId}
              style={{ width: 300 }}
              label="Client ID"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={'Hidden'}
              style={{ width: 300 }}
              label="Client secret"
            />
            <TextField
              id="standard-disabled"
              disabled
              value={apiKey}
              style={{ width: 300 }}
              label="API key"
            />
            <div>
              <p>
                Note: If you’ve lost either your client secret, or API key, you will need to generate a new API key
              </p>
            </div>
          </>
        )
      default:
        return (
          <>
            <h2>Something went wrong.</h2>
          </>
        )
    }
  }

  return (
    <>
      {renderInformation(status)}
    </>

  )
}

export default CredentialsBox;
