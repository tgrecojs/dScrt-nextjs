import { call, all } from 'redux-saga/effects'
import fetchTokenWatcher from '../../features/RoiDetails/saga'
import fetchHistoricalDataWatcher from '../../features/Home/saga'
export default function* root() {
  // yield fork(monitorChangeEventsWatcher)fir
  yield all([call(fetchTokenWatcher), call(fetchHistoricalDataWatcher)])
}
