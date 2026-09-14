import type { AppProps } from "next/app";
import "@fontsource-variable/inter";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
