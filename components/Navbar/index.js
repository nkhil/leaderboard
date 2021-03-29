import React, { useState } from 'react';
import { Box, Stack, Flex, Button } from "@chakra-ui/react";
import { useAuth } from "../../utils/authProvider";
import MenuToggleButton from '@components/MenuToggleButton';
import NavItem from './NavItem';
import Logo from '@components/Logo';

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      backgroundColor="brand.200"
      pb={8}
      py={3}
      px={4}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  )
}


function Navbar(props) {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggleButton toggle={toggle} isOpen={isOpen} />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {auth.user === false 
            &&
            <>
              <NavItem to='/'>Home</NavItem>
              <NavItem to='/documentation'>Docs</NavItem>
              <NavItem to='/login'>Sign in</NavItem>
              <NavItem to='/'>
                <Button
                  size="md"
                  rounded="md"
                  color='#000'
                  bg={["white", "white", "primary.500", "primary.500"]}
                  _hover={{
                    bg: ["black", "black", "black", "black"]
                  }}
                >
                  Sign up
              </Button>
              </NavItem>
            </>
          }
          {auth.user 
            &&
            <>
              <NavItem to='/'>Home</NavItem>
              <NavItem to='/documentation'>Docs</NavItem>
              <NavItem to='/dashboard'>Dashboard</NavItem>
              <NavItem onClick={() => auth.signout()}>
                Log out
              </NavItem>
            </>
          }
          
        </Stack>
      </Box>
    </NavBarContainer>
  );
}

export default Navbar;

