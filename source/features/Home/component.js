import { useDispatch, useSelector } from 'react-redux'
import {
  getVolatilityDecayState,
  fetchHistoricalData,
  setShowTable
} from './reducer'
import HistoricalPriceData from '../HistoricalPriceData/component'
import { useEffect, useState } from 'react'

import RoiDetails from '../RoiDetails/component'
const unbox = (x) => {
  const [data] = x
  return x
}

const trace = (label) => (val) => {
  console.log(`${label}::`, val)
  return val
}
const Volatility = ({ defaultUnderlyingToken = 'eth', ...props }) => {
  console.log('inside Home component:::::', props)
  const dispatch = useDispatch()
  const [underlyingToken, setUnderlyingToken] = useState(
    unbox(defaultUnderlyingToken)
  )
  const onSetUnderlyingToken = (value = {}) => {
    setUnderlyingToken(value)
    return underlyingToken
  }
  useEffect(() => {
    dispatch(fetchHistoricalData(underlyingToken))
  }, [underlyingToken])

  useEffect(() => props.onFetchCurrentPrice(underlyingToken))

  return (
    <>
      <label>Change Underlying Token</label>
      <select
        defaultValue={defaultUnderlyingToken}
        onChange={(e) => onSetUnderlyingToken(e.target.value)}
      >
        <option value="eth" selected={underlyingToken[0] === 'eth'}>
          ETH
        </option>

        <option value="btc">BTC</option>
      </select>
      <RoiDetails />
    </>
  )
}
export default Volatility
