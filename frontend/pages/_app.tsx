import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  )
}

export default MyApp
