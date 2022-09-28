import { Container } from '@mui/material';
import '../styles/globals.css'
import Layout from './../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout><Container maxWidth='md'><Component {...pageProps} /></Container></Layout>
}

export default MyApp
