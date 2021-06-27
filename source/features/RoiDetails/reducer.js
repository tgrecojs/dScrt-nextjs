import dsm from 'redux-dsm'

const states = [
  'initial',
  'idle',
  [
    'fetch data',
    'fetching data',
    ['report success', 'idle'],
    ['report error', 'error', ['handle error', 'idle']]
  ]
]

const getTokenDataState = ({ tokenDataState } = {}) => tokenDataState

const {
  reducer,
  actionCreators: {
    fetchData,
    reportSuccess,
    reportError,
    handleSuccess,
    handleError
  }
} = dsm({
  component: 'token-data',
  description: 'handles state transitions for fetching coingecko api data  ',
  actionStates: states
})

export {
  getTokenDataState,
  fetchData,
  reportSuccess,
  reportError,
  handleSuccess,
  handleError,
  reducer
}
