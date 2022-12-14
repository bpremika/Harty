  import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
  <Head>
      <title>Harty</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/hartyicon.svg" />
    </Head>
    <MantineProvider>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
    </>
  )
}

export default MyApp
