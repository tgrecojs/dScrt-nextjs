import {
  Result,
  map,
  merge,
  constant,
  bimap,
  flip,
  propOr,
  identity,
  toPairs,
  safe,
  maybeToResult,
  traverse,
  and,
  isNumber,
  compose
} from 'crocks'

// length :: [a] -> Int
// eslint-disable-next-line no-unused-vars
const length = (x) => x.length

// gte :: Number -> a -> Result String a
const gte = (x) => (y) => y >= x

// lte :: Number -> a -> Result String a
// eslint-disable-next-line no-unused-vars
const lte = (x) => (y) => y <= x

// lte :: Number -> a -> Result String a
const lt = (x) => (y) => y < x

// validateNumber :: a -> Result String a
const validateNumber = compose(
  maybeToResult('expected value to be a number'),
  safe(isNumber)
)

const validateRatio = compose(
  maybeToResult('expected a value between 1.4 and 3'),
  safe(and(gte(1), lt(3)))
)

/**
 *  schema :: Schema
 *  Schema :: {
 *    [string]: a -> Result String a
 *  }
 * */

const schema = {
  initialInvestment: validateNumber,
  ratio: validateRatio
}
// makeValidator :: Schema -> Object -> Result [String] Object
const makeValidator = flip((object) =>
  compose(
    map(constant(object)),
    traverse(
      Result,
      merge((key, validator) =>
        compose(
          bimap((error) => [{ [key]: error }], identity),
          validator,
          propOr(undefined, key)
        )(object)
      )
    ),
    toPairs
  )
)

// validate :: Object -> Result [String] Object
const validateUserRoiInput = makeValidator(schema)

export default validateUserRoiInput

//=>  Err [ "name: expected a string less than 20 characters", "age: expected a value greater than 18" ]
