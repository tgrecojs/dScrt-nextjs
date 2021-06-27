import { useEffect } from 'react'

const WithHistoricalData = (ComposedComponent) => (props) => {
  useEffect(() => props.onFetchHistoricalData())
  return <ComposedComponent {...props} />
}
export default WithHistoricalData
