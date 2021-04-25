import { Flex, Heading, Button } from "@chakra-ui/react";

function SectionThree() {
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
              What will you build?
            </Heading>
            <Button
              size="lg" 
              as="a" 
              href="/sign-up" 
              bg="#25A979"
              color="#fff" 
              height="60px"
              width="300px"
              variant="solid"
              marginTop="2em"
              marginBottom="4em"
              _hover={{ bg: "brand.300" }}
            >
              Sign up now
            </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default SectionThree;
