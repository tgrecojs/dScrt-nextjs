const divide = (x) => (y) => y / x
const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduceRight((val, fn) => fn(val), initialValue)

const divideBy100 = divide(100)

const trace = (label) => (val) => {
  console.log(`${label}::`, val)
  return val
}

// const testObject = {
//   initialInvestment: 1000,
//   percentChange: 10,
//   ratio: 1.7,
//   ethPrice: 4000
// }

const evaluatePercentLogic = ({ percentChange }) => divideBy100(percentChange)

const calculateFliReturn = (x) =>
  x.initialInvestment * (1 + evaluatePercentLogic(x) * x.leverageRatio)

const evalFinalTokenPrice = (x) => x.tokenPrice * (1 + evaluatePercentLogic(x))
const calculateTokenRoi = (x) =>
  x.initialInvestment * (1 + evaluatePercentLogic(x))

calculateTokenRoi({
  initialInvestment: 1000,
  percentChange: 10,
  withRatio: 10 * 1.7
}) //?

const createFliReturn = (x = {}) => ({
  ...x,
  fliPrice: Object.values(x.tokenData)[1].usd,
  finalFliPrice: calculateFliReturn(x) - x.initialInvestment,
  fliRoi: calculateFliReturn(x) - x.initialInvestment,
  tokenRoi: calculateTokenRoi(x) - x.initialInvestment
})

const createFinalTokenPrice = ({
  fliRoi = 0,
  tokenRoi = 0,
  fliPrice = 0,
  percentChange,
  ...rest
}) => ({
  ...rest,
  fliRoi,
  tokenRoi,
  finalFliPrice: evalFinalTokenPrice({
    tokenPrice: fliPrice,
    percentChange
  }),
  finalTokenPrice: evalFinalTokenPrice({
    tokenPrice: rest.tokenPrice,
    percentChange
  }),
  fliProfitAmount: fliRoi - tokenRoi
})

// const calculateFliROI = compose(createInputParams, createFinalTokenPrice, createFliReturn)(testObject) //?
export default compose(
  trace('final valeu'),
  createFinalTokenPrice,
  trace('after createFliReturn'),
  createFliReturn,
  trace('starting calculation')
)
