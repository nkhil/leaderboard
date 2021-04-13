import { Grid, Flex, Heading, Button, Stack, Text } from "@chakra-ui/react";

function Card({ text, Icon }) {
  return (
    <>
      <Flex
        direction='column'
        width={'250px'}
        p={2}
        alignItems={'center'}
        marginTop={6}
        // border={'2px solid #7D7D7D'}
        borderRadius={'10px'}
      >
        <Icon />
        <Text 
          as="p"
          marginTop={4}
          fontSize={22}
          textAlign='center'
          fontWeight={600}
        >
          { text }
        </Text>
      </Flex>
    </>
  )
}

export default Card;
