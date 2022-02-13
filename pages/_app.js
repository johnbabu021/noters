import { useReducer } from 'react'
import GlobalReducer from '../cotext/globalReducer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <GlobalReducer>
      <Component {...pageProps} />
  </GlobalReducer>

}

export default MyApp
