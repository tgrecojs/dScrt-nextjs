import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import { object } from 'prop-types'

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
MyApp.propTypes = {
  Component: object,
  pageProps: object,
  reduxStore: object
}

export default withReduxStore(MyApp)
