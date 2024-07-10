import "@/styles/global.css";
import Header from "@/components/Header";
import {ThemeProvider} from "@/lib/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
