import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
import Navbar from '@components/Navbar';
import FadeIn from 'react-fade-in';

function Hero() {
  return (
    <>
    <Navbar />
    <Flex justifyContent="center" bg='#25A979'>
      <Flex
        p={0}
        pb={12}
        width={{
          sm: "30em",
          md: "48em",
          lg: "62em",
          base: "30em",
        }}
        alignItems='center'
        flexDirection='column'
      >
        <FadeIn>
          <Heading
            as='h2'
            fontSize={{
              base: '3xl',
              md: '4xl',
              lg: '5xl',
            }}
            fontWeight='700'
            color='white'
            textAlign='center'
            px={2}
            my={12}
            mt={20}
          >
            A simple API to take the work out of managing users and leaderboards
          </Heading>
          <Stack spacing={4} direction="column" align="center" >
            <Button as="a" href="/documentation" bg="black" color="white" size="lg" _hover={{ bgColor: '#000', color: '#fff', border: '0' }}>
              Read documentation
            </Button>
            <Button as="a" href="/sign-up" bg="black" color="white" size="lg" _hover={{ bgColor: '#000', color: '#fff', border: '0' }}>
              Sign up
            </Button>
          </Stack>
        </FadeIn>
      </Flex>
    </Flex >
    </>
  );
}

export default Hero;
