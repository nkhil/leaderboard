import { Button } from "@chakra-ui/react";

function CTAButton ({ text, onClick, marginBottom }) {
  return (
    <>
      <Button 
        size="lg" 
        bg="#25A979"
        color="#fff"
        height="40px"
        width="250px"
        borderRadius="5px"
        marginTop="30px"
        _hover={{ bg: "brand.300" }}
        onClick={onClick}
        marginBottom={marginBottom ? '200px' : '' }
      >
        { text }
      </Button>
    </>
  )
}

export default CTAButton;
