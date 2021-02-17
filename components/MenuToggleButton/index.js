import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { BiMenu, BiX } from "react-icons/bi";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", sm: "none" }} onClick={toggle}>
      {isOpen ? <BiX size={32} color='#fff' /> : <BiMenu size={32} color='#fff' />}
    </Box>
  )
}

export default MenuToggle;
