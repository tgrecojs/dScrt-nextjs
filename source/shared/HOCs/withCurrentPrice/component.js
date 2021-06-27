import { useEffect } from 'react'

const WithCurrentPrice = (ComposedComponent) => (props) => {
  // eslint-disable-next-line react/prop-types,react-hooks/rules-of-hooks
  useEffect(() => props.onFetchCurrentPrice('eth'), [])
  return <ComposedComponent {...props} />
}
export default WithCurrentPrice
