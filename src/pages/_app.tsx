import type { AppProps } from 'next/app';

import '../styles/globals.css';
import 'reactflow/dist/style.css';
import {ThemeProvider} from "@mui/material";
import theme from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}> <Component {...pageProps} /></ThemeProvider>
}

export default MyApp;
