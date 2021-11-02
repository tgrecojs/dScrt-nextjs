import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { fetchData } from '../RoiDetails/reducer'
import { deepOrange, deepPurple, lightBlue, orange } from '@mui/material/colors'

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
import { makeStyles } from '@mui/styles'

import { stakingContract, tokenContract } from '../../shared/utils/consts'
import { truncateAddressString } from '../../shared/utils/strings'

import RoiDetails from '../RoiDetails/component'
import { setFliTokenStrategy } from '../Calculator/reducer'
import { compose } from 'redux'
import FliStrategySelectBox from '../FLIStrategySelectInput/component'
import HelpModal from '../../shared/MUI/modal'
import useTVL from '../../shared/hooks/useTVL'
import useOracle from '../../shared/hooks/useOracle'
import AppBar from '../../shared/MUI/appBar'

const StyledGridCell = ({ children, ...props }) => (
  <Grid
    sx={{
      boxShadow: 2,
      m: 3,
      p: 1
    }}
    {...props}
  >
    {children}
  </Grid>
)

const Volatility = () => {
  const [tvl] = useTVL()
  const [scrtPrice] = useOracle()
  const dispatch = useDispatch()
  const onSetFliSelection = compose(dispatch, setFliTokenStrategy)
  const underlyingToken = useSelector((s) => s.calculatorState.fliTokenStrategy)

  const onSetUnderlyingToken = (value = {}) => {
    onSetFliSelection(value)
    return underlyingToken
  }
  useEffect(() => {
    fetchData(underlyingToken)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [darkState, setDarkState] = useState(
    useMediaQuery('(prefers-color-scheme: dark)')
  )
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[300]
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500]

  const handleThemeChange = () => {
    setDarkState(!darkState)
  }

  return (
    <>
        <StyledGridCell item xs={12}>
          <Typography variant="h2">
            z{'Convert'} {<span color="red">SCRT</span>} to {<span>dSCRT</span>}
          </Typography>

          <Typography variant="subtitle1">
            Liquid staking with dSCRT! Stake your SCRT, get dSCRT, and
            accumulate automatically!
          </Typography>
          <Typography variant={'body2'}>
            Cashmaney takes absolutely no responsibility for any funds gained,
            lost, disappeared, or bamboozeled as a result of usage of this
            software. USE AT YOUR OWN RISK.
          </Typography>
        </StyledGridCell>
        <StyledGridCell item sm={12} xs={6}>
          <HelpModal />
        </StyledGridCell>
        <StyledGridCell item sm={12} xs={6}></StyledGridCell>
        {/*<StyledGridCell item xs={6}>*/}
        {/*    <TextField id="standard-basic" label="SCRT" value={depositAmount} onChange={(event) => {*/}
        {/*        setDepositAmount(event.target.value)*/}
        {/*    }} />*/}
        {/*</Grid>*/}
        {/*<StyledGridCell item xs={6}>*/}
        {/*<TextField id="standard-basic" label="dSCRT" value={depositAmount} onChange={(event) => {*/}
        {/*        setDepositAmount(event.target.value)*/}
        {/*    }} />*/}
        {/*</Grid>*/}

        <StyledGridCell item sm={8} xs={12}>
          <Card>
            <CardContent>
              <Typography variant={'h4'}>Want to earn $CASH?</Typography>
              <Typography
                variant={'body2'}
                color={'textSecondary'}
                style={{ marginTop: 5 }}
              >
                Acquire dSCRT and you will be eligible to get $CASH!
              </Typography>
              <Typography
                variant={'body2'}
                color={'textSecondary'}
                style={{ marginTop: 5 }}
              >
                CASH governance DAO will govern dSCRT, manage validators and
                develop the ecosystem using contract fees. Aquire dSCRT by
                31.7.21 to be elligible!
              </Typography>
            </CardContent>
          </Card>
        </StyledGridCell>
        <StyledGridCell item sm={6} xs={12}>
          <Card>
            <CardContent>
              <Typography variant={'body2'}>
                Staking Contract:{' '}
                {
                  <a
                    href={`https://secretnodes.com/secret/chains/secret-2/contracts/${stakingContract}`}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    {truncateAddressString(stakingContract)}
                  </a>
                }
              </Typography>
              <Typography variant={'body2'}>
                dSCRT Contract:{' '}
                {
                  <a
                    href={`https://secretnodes.com/secret/chains/secret-2/contracts/${tokenContract}`}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    {' '}
                    {truncateAddressString(tokenContract)}{' '}
                  </a>
                }
              </Typography>
            </CardContent>
          </Card>
        </StyledGridCell>
        <StyledGridCell item sm={6} xs={12}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Currently staked{' '}
              </Typography>
              <Typography variant={'h4'}>
                {' '}
                {new Intl.NumberFormat('en-US', {}).format(
                  +Number(tvl) / 1e6
                )}{' '}
                SCRT{' '}
              </Typography>
              <Typography color="textSecondary">
                $
                {new Intl.NumberFormat('en-US', {}).format(
                  (+Number(tvl) * Number(scrtPrice)) / 1e6
                )}
              </Typography>
            </CardContent>
          </Card>
        </StyledGridCell>
        <StyledGridCell item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant={'h5'}>Withdraws</Typography>
        </StyledGridCell>
        <StyledGridCell item xs={12}>
          <Card></Card>
        </StyledGridCell>
        <StyledGridCell item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant={'h5'}>Voting</Typography>
        </StyledGridCell>
        <StyledGridCell item xs={12}>
          <Card></Card>
        </StyledGridCell>
      
      {/*<Hidden mdUp>*/}
      {/*  <APY />*/}
      {/*  <Help />*/}
      {/*</Hidden>*/}
    </>
  )
}
export default Volatility
