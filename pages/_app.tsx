import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "leaflet/dist/leaflet.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import theme from "../src/theme";

export default function PageInitializer(
  props: AppProps & { history: History }
): JSX.Element {
  const { Component, pageProps, history } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ConnectedRouter>
    </>
  );
}
