import '@styles/globals.css'
import { ProvideAuth } from '../utils/authProvider'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../constants/theme';
import { Fonts } from '../constants/fonts';
import 'focus-visible/dist/focus-visible';
import "animate.css/animate.min.css";

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  )
}

export default Application
