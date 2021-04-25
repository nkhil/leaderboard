import { Flex, Link, Text, Stack } from "@chakra-ui/react";
import footerFixture from '../..//constants/footer';

function Footer() {
  return (
    <>
      <Flex 
        justifyContent="center"
        alignItems="center"
        bg='#25A979' 
        minHeight='300px'
      >
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
          <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {footerFixture.map(footerItem => (
            <Link 
              href={footerItem.link}
              style={{ textDecoration: 'none' }}
            >
              <Text
                color='#fff'
                fontWeight='500'
                fontSize={{
                  base: '20px',
                  md: '18px',
                }}
                display="block"
                m='0'
                _hover={{
                  color: '#000',
                }}
              >
                {footerItem.title}
              </Text>
            </Link>
          ))}
        </Stack>
        </Flex>
      </Flex>
    </>
  )
}

export default Footer;
