import { Flex } from "@chakra-ui/react";

function CredentialsBoxContainer({ children }) {
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
        { children }
      </Flex>
    </>
  )
}

export default CredentialsBoxContainer;
