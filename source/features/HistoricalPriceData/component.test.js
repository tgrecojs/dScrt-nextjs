import React from 'react'
import render from 'riteway/render-component'
import { describe } from 'riteway'
import match from 'riteway/match'
import HistoricalPriceData from './component'
import {
  testArray,
  buildVolDecayArray
} from '../../shared/utils/volatility-decay'
describe('HistoricalPriceData component', async (assert) => {
  {
    const $ = render(<HistoricalPriceData />)

    const contains = match($('p').html())
    const testLoadingText = 'loading data'
    assert({
      given: 'no props',
      should: 'render a paragraph tag with the default loading text.',
      actual: contains(testLoadingText) === testLoadingText,
      expected: true
    })
    {
      const loadingText = 'testing different loading text'
      const $ = render(<HistoricalPriceData loadingText={loadingText} />)
      const contains = match($('p').html())

      assert({
        given: 'a loadingText prop',
        should: 'render a paragraph tag containing the loadingText text value.',
        actual: contains(loadingText) === loadingText,
        expected: true
      })
    }
    {
      const testData = buildVolDecayArray(testArray)
      const $ = render(<HistoricalPriceData tableData={testData} />)
      const contains = match($('table').html())

      assert({
        given: 'a tableData prop',
        should:
          'render the currentPrice property of a given element in the array.',
        actual:
          contains(`${testData[0].currentPrice.toFixed(2)}`) ===
          testData[0].currentPrice.toFixed(2),
        expected: true
      })

      assert({
        given: 'a tableData prop',
        should:
          'render the previousPrice property of a given element in the array.',
        actual:
          contains(`${testData[10].previousPrice.toFixed(2)}`) ===
          testData[10].previousPrice.toFixed(2),
        expected: true
      })
      assert({
        given: 'a tableData prop',
        should:
          'render the dailyPriceVolatility property of a given element in the array.',
        actual:
          contains(`${testData[10].dailyPriceVolatility.toFixed(2)}`) ===
          testData[10].dailyPriceVolatility.toFixed(2),
        expected: true
      })

      assert({
        given: 'a tableData prop',
        should:
          'render the deviationAmount property of a given element in the array.',
        actual:
          contains(`${testData[10].deviationAmount.toFixed(2)}`) ===
          testData[10].deviationAmount.toFixed(2),
        expected: true
      })

      assert({
        given: 'a tableData prop',
        should:
          'render the priceChangeInDollars property of a given element in the array.',
        actual:
          contains(`${testData[10].priceChangeInDollars.toFixed(2)}`) ===
          testData[10].priceChangeInDollars.toFixed(2),
        expected: true
      })
    }
  }
})
