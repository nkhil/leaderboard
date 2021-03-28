import styled from 'styled-components';
import { useAuth } from "../../utils/authProvider";
// import Button from '@components/Button';
import { TextField } from '@material-ui/core';
import { Box, Flex, Text, Heading, Stack, Button, VStack } from "@chakra-ui/react";
import { Fonts } from 'constants/fonts';
import { MdDelete, MdEmail } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

function CredentialsBox({ className, status, onClick, credentials }) {
  const { clientId, clientSecret, apiKeys } = credentials;
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
            <button
              type="button"
              onClick={() => auth.signout()}
            >
              Logout
            </button>
          </>
        )
      case status === STATUSES['newApiKey']:
        return (
          <>
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
                Your credentials are ready!
              </Heading>
              <Text as="p" mb={4}>
                Tap or click on the button below once you've noted your credentials down.
              </Text>
              <Flex
                p={[4, 5, 6,   12]}
                width={{
                  sm: "20em",
                  md: "35em",
                  lg: "50em",
                  base: "20em",
                }}
                flexDirection='column'
                justifyContent='center'
                backgroundColor='#EEEEEE'
              >
                <Flex
                  backgroundColor='#E06969'
                  padding={2}
                  borderRadius='sm'
                  marginBottom={8}
                  width={{
                    sm: "10em",
                    md: "25em",
                    lg: "30em",
                    base: "18em",
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
                    <Text color='brand.200' fontSize='lg' fontWeight={600}>
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
                    <Text color='brand.200' fontSize='lg' fontWeight={600}  >
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
          </>
        )
      case status === STATUSES['existingApiKey']:
        return (
          <>
            <Heading
              as='h2'
              marginTop="20px"
              marginBottom="10px"
              fontSize={{
                base: 'xl',
                md: '2xl',
                lg: '2xl',
              }}
              fontWeight='700'
              px={0}
            >
              Your API keys
            </Heading>
            <Flex
              p={[4, 5, 6,   12]}
              width={{
                sm: "20em",
                md: "35em",
                lg: "50em",
                base: "20em",
              }}
              flexDirection='column'
              justifyContent='center'
              backgroundColor='#EEEEEE'
            >
              <h4>Key</h4>
              {apiKeys.map(key => {
                const { apiKey, _id: listKey } = key;
                return (
                  <>
                    <Flex flexDirection='row' key={listKey}>
                      <Text color='brand.200' fontSize={['xs', 'sm', 'md', 'lg']} fontWeight={600} fontFamily={'mono'} >
                      {apiKey}
                      </Text>
                      <Box ml='auto'>
                        <MdDelete color='brand.200' size={20}/>
                      </Box>
                    </Flex>
                  </>
                )
              })}
            </Flex>
            <Heading
              as='h2'
              marginTop="20px"
              marginBottom="10px"
              fontSize={{
                base: 'xl',
                md: '2xl',
                lg: '2xl',
              }}
              fontWeight='700'
              px={0}
            >
              Your client credentials
            </Heading>
            <Flex
                p={[4, 5, 6,   12]}
                width={{
                  sm: "20em",
                  md: "35em",
                  lg: "50em",
                  base: "20em",
                }}
                flexDirection='column'
                justifyContent='center'
                backgroundColor='#EEEEEE'
              >
                <Stack spacing='10px' mb='6' fontFamily={'mono'}>
                  <Box>
                    <Text fontWeight={600}>
                      Client ID
                    </Text>
                  </Box>
                  <Box>
                    <Text color='brand.200' fontSize='lg' fontWeight={600}>
                      {clientId}
                    </Text>
                  </Box>
                </Stack>
                <Stack spacing='10px' mb='6' fontFamily={'mono'}>
                  <Box>
                    <Text fontWeight={600}>
                      Client Secret
                    </Text>
                  </Box>
                  <Box>
                    <Text color='brand.200' fontSize='lg' fontWeight={600}  >
                      {"<HIDDEN>"}
                    </Text>
                  </Box>
                </Stack>
              </Flex>
              <Heading
              as='h2'
              marginTop="20px"
              marginBottom="10px"
              fontSize={{
                base: 'xl',
                md: '2xl',
                lg: '2xl',
              }}
              fontWeight='700'
              px={0}
            >
              Documentation
            </Heading>
            <Text as="p" mb={4}>
              If you have any questions about using the leaderboard API, head over to the <a target="_blank" href="https://subgenius-corp.gitbook.io/leaderboard/">leaderboard api Gitbook page</a> for our documentation.
            </Text>
            <Button isExternal as="a" href="https://subgenius-corp.gitbook.io/leaderboard/" bg="#25A979" color="#fff" size="md" width='200px' leftIcon={<BiLinkExternal />} colorScheme="teal" variant="solid">
              Read documentation
            </Button>
            <Heading
            as='h2'
            marginTop="20px"
            marginBottom="10px"
            fontSize={{
              base: 'xl',
              md: '2xl',
              lg: '2xl',
            }}
            fontWeight='700'
            px={0}
          >
            Support
          </Heading>
          <Text as="p" mb={4}>
            If you'd like help or support, you can reach out to us directly.
          </Text>
          <Button isExternal as="a" href="https://subgenius-corp.gitbook.io/leaderboard/" bg="#25A979" color="#fff" size="md" width='200px' leftIcon={<MdEmail />} variant="solid">
            Email
          </Button>
          <Button size="md" width='200px' colorScheme="twitter" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
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
      <Flex
        margin='auto'
        p={0}
        pb={12}
        width={{
          sm: "15em",
          md: "40em",
          lg: "50em",
          base: "20em",
        }}
        flexDirection='column'
        justifyContent='center'
      >
      {renderInformation(status)}
      </Flex>
    </>

  )
}

export default CredentialsBox;
