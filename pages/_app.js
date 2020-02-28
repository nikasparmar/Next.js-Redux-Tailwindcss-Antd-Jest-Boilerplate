import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/redux';
import { Provider } from 'react-redux';
import '../public/css/index.css';

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp)
;
