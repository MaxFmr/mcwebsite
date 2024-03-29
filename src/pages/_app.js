import './index.scss';
import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import { ParallaxProvider } from 'react-scroll-parallax';

class MyApp extends App {
  componentDidMount() {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, store } = this.props;

    return (
      <ParallaxProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ParallaxProvider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);
