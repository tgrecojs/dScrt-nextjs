import { call, takeLatest, put } from 'redux-saga/effects'
import { fetchData, reportSuccess, reportError } from './reducer'
import { setTokenData } from '../Calculator/reducer'
import { fetchCoingeckoData, currentPrice } from '../../shared/APIs'

const fliMap = {
  eth: { underlying: 'ethereum', token: 'eth-2x-flexible-leverage-index' }
}
const { eth } = fliMap
function* fetchTokenDataSaga(action) {
  try {
    // eslint-disable-next-line no-unused-vars
    const { payload } = action
    const response = yield call(
      fetchCoingeckoData,
      currentPrice(`${eth.underlying},${eth.token}`)
    )
    yield put(reportSuccess(response))
  } catch (error) {
    yield put(reportError(error))
  }
}

function* handleSuccessSaga(action) {
  const { payload } = action
  yield put(setTokenData(payload))
}
export default function* fetchTokenWatcher() {
  yield takeLatest(fetchData().type, fetchTokenDataSaga)
  yield takeLatest(reportSuccess().type, handleSuccessSaga)
}
