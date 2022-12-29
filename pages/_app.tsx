import type { AppProps } from 'next/app';
import Head from "next/head";
import Script from "next/script";
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'

import { useEffect } from 'react';

export default function App({ Component, pageProps }:{Component:any,pageProps:any}) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <>
      <Head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" />
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
