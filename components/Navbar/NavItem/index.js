import { Link, Text, Box } from "@chakra-ui/react";

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link
      href={to}
      _hover={{
        borderBottom: '1px solid red',
      }}
    >
      <Text
        color='#fff'
        fontWeight='500'
        fontSize={{
          base: '20px',
          md: '16px',
        }}
        display="block" {...rest}
        m='0'
        _hover={{
          borderBottom: '0',
        }}
      >
        {children}
      </Text>
    </Link>
  )
}

export default NavItem
