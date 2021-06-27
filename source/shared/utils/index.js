/* eslint-disable no-unused-vars */
import { compose } from 'redux'
import sub from 'date-fns/sub'
import getUnixTime from 'date-fns/getUnixTime'

const defaultStartDate = new Date()
const getDateRange = (start) => (intervalLength) =>
  sub(start, { days: intervalLength })
const getStartDate = getDateRange(new Date())(90)
const toUnixTimestamp = (x, y) => ({
  start: getUnixTime(x),
  end: getUnixTime(y)
})

const { start, end } = toUnixTimestamp(getStartDate, new Date())

const fetcher = (url) => fetch(url).then((res) => res.json())
// append:: String -> String -> String
const append = (x) => (y) => y + x
const appendTokenSuffix = append('-2x-flexible-leverage-index')

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/'

const underlyingTokenEndpoint = (token) => `${COINGECKO_API_URL}coins/${token}`
const fliTokenEndpoint = compose(appendTokenSuffix, underlyingTokenEndpoint)

const makeRangeUrl = (token = '') => {
  // const { start, end } = toUnixTimestamp(getStartDate, new Date())
  return `https://api.coingecko.com/api/v3/coins/${token}/market_chart?vs_currency=usd&days=90&interval=daily`
}
const makePriceEndpoint =
  (currencies = '') =>
  (tokens = '') =>
    `${COINGECKO_API_URL}simple/price?ids=${tokens}&vs_currencies=${currencies}`

const dailyPercentChange = ({ previousPrice, currentPrice }) =>
  ((currentPrice - previousPrice) / previousPrice) * 100

const subtract = (x, y) => x - y

const calculatePriceDifference = ({ previousPrice = 0, currentPrice = 0 }) =>
  previousPrice <= 0 ? 0 : subtract(currentPrice, previousPrice)

const toFixed = (num) => num.toFixed(2)

const composeValues = compose(
  (x) => ({
    ...x,
    priceDifferenceInDollars: calculatePriceDifference(x)
  }),
  dailyPercentChange
)

const composePriceChangeProps = ({ previousPrice, currentPrice }) =>
  !previousPrice
    ? {
        dailyPriceVolatility: 0,
        priceChangeInDollars: 0
      }
    : {
        dailyPriceVolatility: dailyPercentChange({
          previousPrice,
          currentPrice
        }),
        priceChangeInDollars: calculatePriceDifference({
          previousPrice,
          currentPrice
        })
      }

const getPercentageChange = (oldNumber, newNumber) =>
  ((oldNumber - newNumber) / oldNumber) * 100

const aggregatePriceInformation = (
  previousPrice,
  timestamp,
  currentPrice,
  dayIndex
) => ({
  previousPrice: !previousPrice ? 0 : previousPrice,
  dayIndex,
  timestamp: timestamp,
  currentPrice,
  ...composePriceChangeProps({ previousPrice, currentPrice })
})

const previousValue = (array, index) => array[index - 1]

const getIndex =
  (index) =>
  (arr = []) =>
    arr[index]
const idxOne = getIndex(1)

const B = (f) => (g) => g(f)

const reducer = (fn, initialValue) => (data) => data.reduce(fn, initialValue)

const aggregateReducer = (acc, val, index, array) => {
  acc = acc.concat(
    aggregatePriceInformation(
      idxOne(previousValue(array, index)),
      val[0],
      val[1],
      index
    )
  )
  return acc
}

export {
  fliTokenEndpoint,
  fetcher,
  underlyingTokenEndpoint,
  makeRangeUrl,
  aggregateReducer,
  makePriceEndpoint,
  appendTokenSuffix
}
