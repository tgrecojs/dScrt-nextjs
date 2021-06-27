import { call, takeLatest, put } from 'redux-saga/effects'
import {
  fetchHistoricalData,
  reportSuccess,
  reportError,
  setHistoricalData,
  setHistoricalFliData
} from './reducer'
import { fetchCoingeckoData } from '../../shared/APIs'
import { makeRangeUrl, aggregateReducer } from '../../shared/utils'
import { buildVolDecayStats } from '../../shared/utils/volatility-decay'
import { setVolDecayStats } from '../Calculator/reducer'
const map = {
  eth: 'ethereum',
  fly: 'eth-2x-flexible-leverage-index'
}

const applyAggregationFn =
  (reducerFn, initialValue = []) =>
  (data) =>
    data.reduceRight(reducerFn, initialValue)

const aggregatePriceData = applyAggregationFn(aggregateReducer, [])

function* fetchTokenDataSaga() {
  try {
    // TODO: remove hardcoded map.eth value for other FLI products
    const underlyingTokenRespose = yield call(
      fetchCoingeckoData,
      makeRangeUrl(map.eth)
    )
    const fliTokenResponse = yield call(
      fetchCoingeckoData,
      makeRangeUrl(map.fly)
    )
    yield put(
      reportSuccess({
        underlyingToken: aggregatePriceData(underlyingTokenRespose.prices),
        fliToken: aggregatePriceData(fliTokenResponse.prices)
      })
    )
  } catch (error) {
    yield put(reportError(error))
  }
}

function* handleHistoricalDataSaga(action) {
  const { payload } = action
  yield put(setHistoricalData(payload.underlyingToken))
  yield put(setHistoricalFliData(payload.fliToken))
}

function* handleVolDecayCalculation(action) {
  const { payload } = action
  yield put(setVolDecayStats(buildVolDecayStats(payload)))
}

export default function* fetchTokenWatcher() {
  yield takeLatest(fetchHistoricalData().type, fetchTokenDataSaga)
  yield takeLatest(reportSuccess().type, handleHistoricalDataSaga)
  yield takeLatest(setHistoricalData().type, handleVolDecayCalculation)
}
