import { Flex, Spinner, Text, Box } from "@chakra-ui/react";

function LoadingScreen() {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      height='100vh'
      flexDirection='column'
    >
      <Box>
        {<Spinner />  }
      </Box>
      <Box>
        <Text>Loading...</Text>
      </Box>
    </Flex>
  )
}

export default LoadingScreen;
