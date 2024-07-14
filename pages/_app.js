import "@/styles/global.css";
import Header from "@/components/Header";
import {ThemeProvider} from "@/lib/ThemeContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
            <title>Watchit</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ThemeProvider>
              <Header />
              <Component {...pageProps} />
          </ThemeProvider>
      </>

  )
}