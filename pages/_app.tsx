import type { AppProps } from "next/app";
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '@/styles/globals.css'
// import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
          <Component {...pageProps} />
      </>
    );
  }