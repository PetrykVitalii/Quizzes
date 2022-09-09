import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '@/store';

import { GlobalStyle, theme } from '@/styles/global';

import ProtectRoute from '@/components/common/ProtectRoute';

interface PageProps {
  protected: boolean;
}

const MyApp: React.FC<AppProps<PageProps>> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>New Project</title>
      </Head>
      {pageProps.protected ? (
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      ) : <Component {...pageProps} />}
    </ThemeProvider>
  </Provider>
);

export default MyApp;
