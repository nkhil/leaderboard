import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"

function Logo(props) {
  return (
    <Box {...props}>
      <Image
        src="/images/logo.png"
        alt="leaderboard"
        width={250}
        height={50}
      />
    </Box>
  )
}

export default Logo;
