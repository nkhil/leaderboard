import { Link, Text, Box } from "@chakra-ui/react";

const NavItem = ({ children, isLast, onClick, to = "/", ...rest }) => {
  return (
    <Link
      href={to}
      style={{ textDecoration: 'none' }}
      onClick={onClick}
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
          color: '#000',
        }}
      >
        {children}
      </Text>
    </Link>
  )
}

export default NavItem
