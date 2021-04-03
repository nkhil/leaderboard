import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
import Navbar from '@components/Navbar';

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
          <Button as="a" href="/sign-up" bg="black" color="white" size="lg" _hover={{ bgColor: '#000', color: '#fff', border: '0' }}>
            Sign up now
          </Button>
          <Button as="a" href="/documentation" colorScheme="white" size="lg" variant="outline" _hover={{ bgColor: '#000', color: '#fff', border: '0' }}>
            Read Documentation
          </Button>
        </Stack>
      </Flex>
    </Flex >
    </>
  );
}

export default Hero;

// export default styled(Hero)`
//   max-width: 1000px;
//   color: white;
//   padding: 50px 20px;
//   margin: auto;

//   h2 {
//     font-weight: 200;
//     font-size: 2.5rem;
//     padding: 30px;
//     margin-bottom: 20px;
//   }

//   @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    
//     padding: 20px 10px;
    
//     h2 {
//       font-size: 2rem;
//       padding: 5px;
//       margin-bottom: 20px;
//     }
//   }
// `;
