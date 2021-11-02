import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'

import Link from 'next/link'
import { ThemeProvider } from '@mui/material/styles'
import AppBar from '../../MUI/appBar'
import {
  BottomNavigation,
  Card,
  Container,
  Grid,
  GridModal,
  Typography,
  CardContent,
  useMediaQuery
} from '@mui/material'
import { deepOrange, deepPurple, lightBlue, orange } from '@mui/material/colors';
import theme from '../../MUI/theme'
import { useMemo, useState } from 'react'
const WithLayout =
  (ComposedComponent) =>
  ({ pageTitle = 'ETH 2x FLI Calculator Web App', ...rest }) => {
    // eslint-disable-next-line react/prop-types
 
    const [darkState, setDarkState] = useState(useMediaQuery('(prefers-color-scheme: dark)'));
    const mainPrimaryColor = darkState ? orange[500] : lightBlue[300];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
    const themeObj = useMemo(
      () =>
        createTheme({
          palette: {
            type: darkState ? 'dark' : 'light',
            primary: {
              main: mainPrimaryColor
            },
            secondary: {
              main: mainSecondaryColor
            }
          },
          typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"'
            ].join(',')
          }
        }),
      [darkState, mainPrimaryColor, mainSecondaryColor]
    )
    const handleThemeChange = () => {
      setDarkState(!darkState)
    }
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <ThemeProvider theme={themeObj}>
          <Container maxWidth="lg">
            <AppBar isDark={darkState} changeDarkTheme={handleThemeChange} />
          </Container>
          <Container maxWidth="lg">
            <CssBaseline />
            <ComposedComponent {...rest} />
          </Container>
        </ThemeProvider>
      </>
    )
  }

export default WithLayout
