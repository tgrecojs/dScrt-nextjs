import { makePriceEndpoint } from '../utils'

const currentPrice = makePriceEndpoint('usd')
const fetchCoingeckoData = async (endpoint = '') => {
  const response = await fetch(endpoint)
  const data = await response.json()
  return data
}

export { fetchCoingeckoData, currentPrice }
