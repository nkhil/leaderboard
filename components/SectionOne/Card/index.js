import { Grid, Flex, Heading, Button, Stack, Text } from "@chakra-ui/react";

function Card({ text, Icon }) {
  return (
    <>
      <Flex
        direction='column'
        width={'250px'}
        padding={2}
        alignItems={'center'}
        marginTop={6}
      >
        <Icon />
        <Text 
          as="p"
          marginTop={4}
          fontSize={18}
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
