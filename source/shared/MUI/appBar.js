import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar' 
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import WbIncandescent from '@mui/icons-material/WbIncandescent'
import Brightness2 from '@mui/icons-material/Brightness2'
import { useSecret } from '../hooks/useSecret'
import { truncateAddressString } from '../utils/strings'
import { Container } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  title: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  balance: {
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1)
  },
  appBarBalance: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),

    display: 'flex'
  },
  appBarItem: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '10px',
    marginLeft: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  }
}))

export default function MenuAppBar(props) {
  const classes = useStyles()
  const { secretLoaded, account, scrtBalance } = useSecret()

  let [selectedAccount, setSelectedAccount] = useState(undefined)

  useEffect(() => {
    const stuff = async () => {
      if (secretLoaded && account) {
        setSelectedAccount(account)
      }
    }

    stuff()
  }, [secretLoaded, account])

  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
          {/*    <MenuIcon />*/}
          {/*</IconButton>*/}
          <>
            <div className={classes.appBarItem}>
              {/*<Container className={classes.menuButton}>*/}
              {/*    <AccountCircle className={classes.menuButton} />*/}
              {/*</Container>*/}

              <Typography variant="h6" className={classes.title}>
                {selectedAccount
                  ? truncateAddressString(selectedAccount)
                  : 'Connect Wallet'}
              </Typography>
            </div>
            <div className={classes.appBarBalance}>
              <Typography variant="h6" className={classes.balance}>
                {(Number(scrtBalance) / 1e6).toFixed(3)}
                {' SCRT'}
              </Typography>
            </div>
          </>
          <div>
            {props.isDark ? (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.changeDarkTheme}
                color="inherit"
              >
                <WbIncandescent />
              </IconButton>
            ) : (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.changeDarkTheme}
                color="inherit"
              >
                <Brightness2 />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
