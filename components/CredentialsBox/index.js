import { useAuth } from "../../utils/authProvider";
import { Box, Flex, Text, Stack, Button, Link } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import Heading from '@components/Heading';
import CredentialsBoxContainer from './CredentialsBoxContainer';
import GreyContainer from './GreyContainer';
import CTAButton from './Button';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

function CredentialsBox({ status, onClick, credentials }) {
  const { clientId, clientSecret } = credentials;
  const auth = useAuth();
  const STATUSES = {
    noApiKey: 'NO_API_KEY',
    existingApiKey: 'EXISTING_API_KEY',
    newApiKey: 'NEW_API_KEY',
  }
  console.log('USER', auth.user);

  const renderInformation = (status) => {
    const statusIsValid = Object.values(STATUSES).includes(status)
    if (!statusIsValid) throw new Error('Invalid Status supplied')
    switch (true) {
      case status === STATUSES['noApiKey']:
        return (
          <>
            <Heading>
              You currently don't have any client credentials
            </Heading>
            <Text as="p">
              Once you create your client credentials, we’ll automatically make an API key for you.
            </Text>
            <Text as="p" marginTop="10px">
              Please note these credentials as they will only be displayed once.
            </Text>
            <CTAButton 
              text='Create my client credentials'
              onClick={onClick}
            />
          </>
        )
      case status === STATUSES['newApiKey']:
        return (
          <>
            { true && <ConfettiExplosion stagger={500} />}
            <Heading>
              Your credentials are ready!
            </Heading>
            <Text as="p" mb={4}>
              Tap or click on the button below once you've noted your credentials down.
            </Text>
            <GreyContainer>
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
            </GreyContainer>
            <CTAButton 
              text='I have noted it down'
              onClick={onClick}
            />
          </>
        )
      case status === STATUSES['existingApiKey']:
        return (
          <>
            <Heading>
              Your client credentials
            </Heading>
            <GreyContainer>
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
                    {"**********"}
                  </Text>
                </Box>
              </Stack>
            </GreyContainer>
            <Link href='/forgot-client-credentials' fontSize="md" color="brand.200" mt={2}>
              Forgot your credentials?
            </Link>
            <Heading>
              Documentation
            </Heading>
            <Text as="p" mb={4}>
              If you have any questions about using the leaderboard API, head over to the <Link fontWeight='600' color='brand.200' as='a' target="_blank" href="https://subgenius-corp.gitbook.io/leaderboard/">leaderboard api Gitbook page</Link> for our documentation.
            </Text>
            <Text as="p" mb={4}>
              Note: You can find the most up-to-date OpenAPI Spec (swagger) at <Link fontWeight='600' color='brand.200' as='a' target="_blank" href="https://api.leaderboardapi.com/swagger">api.leaderboardapi.com/swagger</Link>
            </Text>
            <Button as="a" href="https://subgenius-corp.gitbook.io/leaderboard/" bg="#25A979" color="#fff" size="md" width='200px' leftIcon={<BiLinkExternal />} colorScheme="teal" variant="solid">
              Read documentation
            </Button>
            <Heading>
              Support
            </Heading>
          <Text as="p" mb={4}>
            If you'd like help or support, you can reach out to us directly.
          </Text>
          <Stack direction={["column", "row"]} spacing='10px' mb='6'>
            <Box>
              <Button as="a" href="https://subgenius-corp.gitbook.io/leaderboard/" bg="#25A979" color="#fff" size="md" width='200px' leftIcon={<MdEmail />} variant="solid">
                Email
              </Button>
            </Box>
            <Box>
              <Button size="md" width='200px' bg="#25A979" color="#fff" leftIcon={<FaTwitter />}>
                Twitter
              </Button>
            </Box>
          </Stack>
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
      <CredentialsBoxContainer>
        {renderInformation(status)}
      </CredentialsBoxContainer>
    </>

  )
}

export default CredentialsBox;
