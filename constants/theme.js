import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  colors: {
    brand: {
      100: "#bfdef2",
      200: '#25A979',
      'white': '#FFF',
      300: '#2abd87',
    },
    button: {
      50: "#44337A",
      100: "#B794F4",
      500: "#B794F4",
    }
  },
  fonts: {
    heading: 'Open Sans',
    body: 'IBM Plex Sans',
    mono: 'Roboto Mono',
  },
})
