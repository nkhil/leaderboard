import { Heading } from "@chakra-ui/react";

function H2({ children }) {
  return (
    <>
      <Heading
        as='h2'
        marginTop="20px"
        marginBottom="10px"
        fontSize={{
          base: 'xl',
          md: '2xl',
          lg: '2xl',
        }}
        fontWeight='700'
        px={0}
        marginTop={12}
        marginBottom={4}
      >
        {children}
      </Heading>
    </>
  )
}

export default H2;
