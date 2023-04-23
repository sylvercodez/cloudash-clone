import '@/styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

const title = "Cloudash — Access CloudWatch logs and metrics, hassle-free";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
          <title>{title}</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}