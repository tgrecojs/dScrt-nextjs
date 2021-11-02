import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'
import { object } from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'

import theme from '../source/shared/MUI/theme'

import createEmotionCache from '../source/shared/MUI/createEmotionCache'
const styleCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = styleCache,
  pageProps,
  reduxStore
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={reduxStore}>
          <Component {...pageProps} />
      </Provider>
    </CacheProvider>
  )
}
MyApp.propTypes = {
  emotionCache: object,
  Component: object,
  pageProps: object,
  reduxStore: object
}

export default withReduxStore(MyApp)
