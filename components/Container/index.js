import styled from 'styled-components';
// import theme from '../../constants/theme';
import { Box } from "@chakra-ui/react"

function Container({ children }) {
  return (
    <Box bg="brand.100">
      {children}
    </Box>
  )
}

export default Container;

// export default styled(Container)`
//   background-color: ${props => {
//     if (props.bgColour) return props.bgColour;
//     return 'white';
//   }};
//   max-width: ${theme.width};
//   padding: 50px 20px;
//   margin: auto;
// `
