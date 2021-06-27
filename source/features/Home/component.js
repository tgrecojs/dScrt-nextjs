import { useDispatch, useSelector } from 'react-redux'
import {
  getVolatilityDecayState,
  fetchHistoricalData,
  setShowTable
} from './reducer'
import HistoricalPriceData from '../HistoricalPriceData/component'
import { useEffect } from 'react'
import RoiDetails from '../RoiDetails/component'

const Volatility = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchHistoricalData()), [])
  return <RoiDetails />
}
export default Volatility
