import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFliTokenStrategy } from '../Calculator/reducer'
const FliStrategySelectBox = ({ underlyingToken = 'eth', onChange }) => {
  useEffect(() => {
    dispatch(setFliTokenStrategy(underlyingToken))
  }, [underlyingToken])
  const dispatch = useDispatch()
  console.log({ underlyingToken })
  return (
    <>
      <label>Change Underlying Token</label>
      <select
        defaultValue={underlyingToken}
        onChange={(e) => onChange(e.target.value)}
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
