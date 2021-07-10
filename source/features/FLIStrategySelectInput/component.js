import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFliTokenStrategy } from '../Calculator/reducer'
const FliStrategySelectBox = ({
  defaultUnderlyingToken = 'eth',
  onFetchCurrentPrice
}) => {
  const underlyingToken = useSelector((s) => s.calculatorState.fliTokenStrategy)
  useEffect(() => {
    dispatch(setFliTokenStrategy(defaultUnderlyingToken))
  }, [])
  const dispatch = useDispatch()
  console.log({ underlyingToken })
  return (
    <>
      <label>Change Underlying Token</label>
      <select
        defaultValue={defaultUnderlyingToken}
        onChange={(e) => dispatch(setFliTokenStrategy(e.target.value))}
      >
        <option value="eth" selected={underlyingToken === 'eth'}>
          ETH
        </option>
        <option value="btc">BTC</option>
      </select>
    </>
  )
}

export default FliStrategySelectBox
