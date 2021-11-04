import '@fontsource/roboto'
import '@fontsource/sarabun'
import '../styles/globals.css'

import Layout from '../components/Layouts/Layout/Layout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
