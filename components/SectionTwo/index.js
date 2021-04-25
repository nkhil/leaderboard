import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
import CardContainer from './CardContainer';

function SectionTwo() {
  return (
    <>
      <Flex justifyContent="center">
        <Flex
          mt={2}
          p={4}
          pb={12}
          width={{
            sm: "25em",
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
                md: '5xl',
                lg: '4xl',
              }}
              fontWeight='700'
              color='black'
              textAlign='center'
              lineHeight={'1.3'}
              px={0}
              my={0}
              mt={4}
              width={{
                md: '18em',
                lg: '18em',
                sm: '10em',
                base: '12em'
              }}
            >
              Made with features you will love
            </Heading>
            <CardContainer />
        </Flex>
      </Flex>
    </>
  )
}

export default SectionTwo;