import autodux from 'autodux'
import { string } from 'prop-types'
import roiFunction from '../../shared/utils/calculator'
import { fliRoiWithDecay } from '../../shared/utils/volatility-decay'

export const defaultState = {
  fliTokenStrategy: 'ETH',
  initialInvestment: 0,
  leverageRatio: '0.00',
  percentChange: 10,
  holdingPeriod: 0,
  tokenPrice: 0,
  roiResult: null,
  tokenData: {},
  historicalData: {},
  volDecayStats: {}
}
const toDecimal = (x) => x / 100
const add = (x) => (y) => x + y
const calculateCustomDecay = ({
  percentChange,
  leverageRatio,
  holdingDecay
} = {}) => {
  console.log('calculatingCustomDecay::', {
    percentChange,
    leverageRatio,
    holdingDecay
  })
  return (
    Math.pow(1 + toDecimal(percentChange), leverageRatio) * holdingDecay - 1
  )
}
export const {
  reducer,
  actions: {
    setTokenData,
    setHistoricalData,
    setLeverageRatio,
    setFliTokenStrategy,
    setInitialInvestment,
    setPercentChange,
    setHoldingPeriod,
    setTokenPrice,
    setRoiState,
    setVolDecayStats,
    setRoiWithVolDecay
  },
  selectors: {
    getTokenData,
    gistoricalData,
    getLeverageRatio,
    getFliTokenStrategy,
    getInitialInvestment,
    getPercentChange,
    getHoldingPeriod,
    getTokenPrice,
    getRoiResult,
    getVolDecayStats
  }
} = autodux({
  slice: 'FLI ROI calculator',
  initial: defaultState,
  actions: {
    setInitialInvestment: (s, payload) => ({
      ...s,
      initialInvestment: Number(payload)
    }),
    setPercentChange: (s, payload) => ({
      ...s,
      percentChange: Number(payload)
    }),
    setLeverageRatio: (s, payload) => ({
      ...s,
      leverageRatio: Number(payload)
    }),
    setRoiState: (state, payload) => {
      const holdingDecay = state.volDecayStats.calculateHoldingVol({
        holdingPeriod: Number(state.holdingPeriod),
        annualizedVol: state.volDecayStats.annualizedVol,
        ratio: state.leverageRatio
      })
      const fliReturnWithDecay = fliRoiWithDecay(holdingDecay)({
        leverageRatio: state.leverageRatio,
        percentChange: toDecimal(state.percentChange)
      })
      console.log({
        fliReturnWithDecay
      })
      return {
        ...state,
        roiResult: roiFunction({
          ...state,
          fliStrategy: state.fliTokenStrategy,
          tokenPrice: state.tokenData.ethereum.usd,
          percentChange: Number(state.percentChange)
        }),
        holdingDecay: state.volDecayStats.calculateHoldingVol({
          holdingPeriod: Number(state.holdingPeriod),
          annualizedVol: state.volDecayStats.annualizedVol,
          ratio: state.leverageRatio
        }),
        volDecay: state.volDecayStats.calculateDecay(
          state.percentChange,
          state.leverageRatio
        ),
        roiWithDecay: add(
          state.initialInvestment *
            (Math.pow(1 + toDecimal(state.percentChange), state.leverageRatio) *
              state.volDecayStats.volDecayStd -
              1)
        )(Number(state.initialInvestment)),
        expectedVolDecay: calculateCustomDecay({
          ...state,
          holdingDecay: state.volDecayStats.calculateHoldingVol({
            holdingPeriod: Number(state.holdingPeriod),
            annualizedVol: state.volDecayStats.annualizedVol,
            ratio: state.leverageRatio
          })
        })
      }
    },
    setRoiWithVolDecay: (s) => ({
      roiWithVolDecay:
        Math.pow(1 + (Number(s.percentChange / 100), s.leverageRatio)) *
          s.volDecayStats.volDecayStd -
        1,
      roiValueWithVolDecay:
        s.initialInvestment *
          (Math.pow(1 + (Number(s.percentChange / 100), s.leverageRatio)) *
            s.volDecayStats.volDecayStd -
            1) +
        s.initialInvestment
    }),
    resetForm: (state) => ({
      fliTokenStrategy: state.fliTokenStrategy
    }),
    setHistoricalData: (state, { underlyingToken, fliToken }) => ({
      ...state,
      historicalData: {
        underlyingToken,
        fliToken
      }
    })
  },
  selectors: {
    getState: (state) => ({ ...state })
  }
})
