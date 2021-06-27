import React from 'react'
import render from 'riteway/render-component'
import { describe } from 'riteway'
import match from 'riteway/match'
import Calculator from './component'

describe('Calculator component', async (assert) => {
  {
    const $ = render(<Calculator />)

    const contains = (x) =>
      match($('.calculator').html(), x) !== '' ? true : false

    assert({
      given: 'no props',
      should: 'default to calculating ROI for ETH FLI.',
      actual: contains('ETH'),
      expected: true
    })

    assert({
      given: 'no props',
      should: 'render a calculator using the default initialHoldingPeriod prop',
      actual: contains('0'),
      expected: true
    })

    assert({
      given: 'no props',
      should:
        'render HTML containing the string "Initial Investment Amount (Dollars)"',
      actual: contains('Initial'),
      expected: true
    })

    assert({
      given: 'no props',
      should: 'render HTML containing the string "Token Price"',
      actual: contains('Token Price'),
      expected: true
    })
  }
})
