import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../RoiDetails/reducer'
import {
  BottomNavigation,
  Card,
  Grid,
  GridModal,
  Typography,
  CardContent
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  scrtColor: {
    color: theme.palette.primary
  },
  subtitle: {
    color: theme.palette.primary
  },
  card: {
    minWidth: 275
  },
  titleText: {
    fontSize: 14
  }
}))
const Volatility = () => {
  const classes = useStyles()
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

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h2">
            {'Convert'} {<span color="red">SCRT</span>} to {<span>dSCRT</span>}
          </Typography>

          <Typography variant="subtitle1">
            Liquid staking with dSCRT! Stake your SCRT, get dSCRT, and
            accumulate automatically!
          </Typography>
          <Typography style={{ paddingTop: 10 }} variant={'body2'}>
            Cashmaney takes absolutely no responsibility for any funds gained,
            lost, disappeared, or bamboozeled as a result of usage of this
            software. USE AT YOUR OWN RISK.
          </Typography>
        </Grid>
        <Grid item sm={12} xs={6} style={{ textAlign: 'right' }}>
          <HelpModal />
        </Grid>
        <Grid item sm={12} xs={6} style={{ textAlign: 'left' }}></Grid>
        {/*<Grid item xs={6}>*/}
        {/*    <TextField id="standard-basic" label="SCRT" value={depositAmount} onChange={(event) => {*/}
        {/*        setDepositAmount(event.target.value)*/}
        {/*    }} />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={6}>*/}
        {/*<TextField id="standard-basic" label="dSCRT" value={depositAmount} onChange={(event) => {*/}
        {/*        setDepositAmount(event.target.value)*/}
        {/*    }} />*/}
        {/*</Grid>*/}

        <Grid item sm={8} xs={12}>
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
        </Grid>
        <Grid item sm={6} xs={12}>
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
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card>
            <CardContent>
              <Typography
                className={classes.titleText}
                color="textSecondary"
                gutterBottom
              >
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
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant={'h5'}>Withdraws</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
          </Card>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant={'h5'}>Voting</Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
          </Card>
        </Grid>
      </Grid>
      {/*<Hidden mdUp>*/}
      {/*  <APY />*/}
      {/*  <Help />*/}
      {/*</Hidden>*/}
    </>
  )
}
export default Volatility
