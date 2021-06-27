import dsm from 'redux-dsm'
import autodux from 'autodux'
import {
  buildVolDecayArray,
  calculateReturnWithVolDecay,
  buildVolDecayStats
} from '../../shared/utils/volatility-decay'

export const {
  reducer,
  actions: {
    setShowTable,
    setHistoricalFliData,
    setHistoricalData,
    setVolDecayStats,
    setHistoricalDataWithVolatility
  },
  selectors: {
    getShowTable,
    getHistoricalFliData,
    getHistoricalData,
    getVolDecayStats,
    getHistoricalDataWithVolatility
  }
} = autodux({
  slice: 'volatility-decay',
  initial: {
    showTable: false,
    historicalFliData: [],
    historicalData: [],
    volDecayStats: {},
    historicalDataWithVolatility: []
  },
  actions: {
    setHistoricalData: (state, payload) => ({
      ...state,
      historicalData: buildVolDecayArray(payload)
    }),
    setRoiWithVolDecay: (s, { percentChange, ratio }) => ({
      ...s,
      roiWithDecay: calculateReturnWithVolDecay(s.volDecayStats.volDecayStd)(
        percentChange,
        ratio
      )
    }),
    setHistoricalFliData: (state, payload) => ({
      ...state,
      historicalFliData: buildVolDecayArray(payload)
    })
  }
})
const states = [
  'initial',
  'idle',
  [
    'fetch historical data',
    'fetching data',
    ['report success', 'idle'],
    ['report error', 'error', ['handle error', 'idle']]
  ]
]

const getStateByPropName = (propName) => (state) => state[propName]
const getVolatilityDecayState = ({ volatilityDecayState } = {}) =>
  volatilityDecayState
const getHistoricalDataState = ({ historicalDataState } = {}) =>
  historicalDataState

const historicalDataDSM = dsm({
  component: 'historical-token-data',
  description:
    'handles state transitions for fetching last 90 days of price daa coingecko api data  ',
  actionStates: states
})

const {
  actionCreators: {
    fetchHistoricalData,
    reportSuccess,
    reportError,
    handleSuccess,
    handleError
  }
} = historicalDataDSM

export default historicalDataDSM
export {
  getHistoricalDataState,
  getVolatilityDecayState,
  fetchHistoricalData,
  reportSuccess,
  reportError,
  handleSuccess,
  handleError
}
