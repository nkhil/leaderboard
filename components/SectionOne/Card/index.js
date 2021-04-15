import { Flex, Text } from "@chakra-ui/react";

function Card({ text, Icon, description }) {
  return (
    <>
      <Flex
        direction='column'
        width={'250px'}
        p={2}
        alignItems={'center'}
        marginTop={6}
        borderRadius={'10px'}
      >
        <Icon />
        <Text 
          as="h3"
          marginTop={8}
          fontSize={23}
          textAlign='center'
          fontWeight={800}
        >
          { text }
        </Text>
        <Text 
          as="p"
          marginTop={2}
          fontSize={18}
          textAlign='center'
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
