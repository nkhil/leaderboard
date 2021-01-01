import '@styles/globals.css'
import { ProvideAuth } from '../utils/authProvider'

function Application({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  )
}

export default Application
