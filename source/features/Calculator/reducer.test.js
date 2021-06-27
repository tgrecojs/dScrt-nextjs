import { describe } from 'riteway'
import {
  reducer,
  defaultState,
  setPercentChange,
  setLeverageRatio,
  setFliTokenStrategy,
  setInitialInvestment
} from './reducer'

const createState = (state = {}) => ({
  defaultState,
  ...state
})
const isEqual = (x, y) => x.toString() === y.toString()

describe('FLI ROI calculator - reducer()', async (assert) => {
  assert({
    given: 'no arguments',
    should: 'return the default state',
    actual: isEqual(reducer(undefined), defaultState),
    expected: true
  })

  const targetFliToken = 'ETH'
  const initialState = reducer(undefined)

  const afterSelectingFliStrategy = reducer(
    initialState,
    setFliTokenStrategy(targetFliToken)
  )

  assert({
    given: 'setFliTokenStrategy function',
    should: 'update state.fliTokenStrategy with its payload value.',
    actual: isEqual(afterSelectingFliStrategy.fliTokenStrategy, 'ETH'), //?
    expected: true
  })

  const testInvestmentValue = 10000

  const aftersetinitialInvestment = reducer(
    afterSelectingFliStrategy,
    setInitialInvestment(testInvestmentValue)
  )

  assert({
    given: 'setinitialInvestmentAmount function',
    should: 'update the state.investment with its payload value.',
    actual: isEqual(
      aftersetinitialInvestment,
      createState({
        investment: testInvestmentValue,
        fliTokenStrategy: 'ETH'
      })
    ),
    expected: true
  })

  const testRatio = 1.7
  const afterSetRatio = reducer(
    aftersetinitialInvestment,
    setLeverageRatio(testRatio)
  )
  assert({
    given: 'setLeverageRatio function',
    should: 'update state.leverageRatio with its payload value.',
    actual: isEqual(
      afterSetRatio,
      createState({
        investment: testInvestmentValue,
        fliTokenStrategy: 'ETH',
        leverageRatio: testRatio
      })
    ),
    expected: true
  })
  const testPercent = 15
  const afterSetPercent = reducer(afterSetRatio, setPercentChange(testPercent))
  assert({
    given: 'setPercentChange function',
    should: 'update state.leverageRatio with its payload value.',
    actual: isEqual(
      afterSetPercent,
      createState({
        investment: testInvestmentValue,
        fliTokenStrategy: 'ETH',
        leverageRatio: testRatio,
        percentChange: testPercent
      })
    ),
    expected: true
  })
})
