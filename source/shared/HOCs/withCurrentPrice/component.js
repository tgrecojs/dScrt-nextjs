/* eslint-disable react/prop-types,react-hooks/rules-of-hooks,react-hooks/exhaustive-deps */
import { useEffect } from 'react'

// TODO: Add propType checks for HOCs
const WithCurrentPrice =
  (ComposedComponent) =>
  ({ underlyingToken = 'eth', ...props }) => {
    useEffect(() => props.onFetchCurrentPrice(underlyingToken), [])
    return <ComposedComponent {...props} />
  }
export default WithCurrentPrice
