import { Flex } from "@chakra-ui/react";

function GreyContainer ({ children }) {
  return (
    <>
      <Flex
        p={ [4, 5, 6, 12] }
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
        { children }
      </Flex>
    </>
  )
}

export default GreyContainer;
