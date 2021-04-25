import { Flex, Text, Heading, Button, Stack } from "@chakra-ui/react";

function Card({ heading, description }) {
  return (
    <>
      <Flex
        direction='column'
        width={'300px'}
        p={4}
        alignItems={'flex-start'}
        marginTop={6}
        borderRadius={'10px'}
        border='1px solid #C4C4C4'
      >
        <Text 
          as="h3"
          marginTop={2}
          fontSize={23}
          textAlign='left'
          fontWeight={800}
        >
          { heading }
        </Text>
        <Text 
          as="p"
          marginTop={2}
          fontSize={18}
          textAlign='left'
          fontWeight={400}
          color="#6A6A6A"
        >
          { description }
        </Text>
      </Flex>
    </>
  )
}

export default Card;