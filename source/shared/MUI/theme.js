import { createTheme } from '@mui/material/styles'
import { deepOrange, deepPurple, lightBlue, orange } from '@mui/material/colors'
const theme = (darkState = false) =>
  createTheme({
    palette: {
      type: darkState ? 'dark' : 'light',
      primary: {
        main: darkState ? orange[500] : lightBlue[300]
      },
      secondary: {
        main: darkState ? deepOrange[900] : deepPurple[500]
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
  })

export default theme()
