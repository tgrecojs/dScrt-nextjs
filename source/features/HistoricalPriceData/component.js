import { array, string } from 'prop-types'
const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleDateString('en-US')
const RenderHistoricalData = ({
  tableData = [],
  loadingText = 'loading data'
}) =>
  tableData.length <= 0 ? (
    <p>{loadingText}</p>
  ) : (
    <table className="m-auto text-center">
      <thead>
        <tr>
          <th>Date (DD/MM/YY):</th>
          <th>Price</th>
          <th>Price Vol % </th>
          <th>Price Vol Deviation %</th>
          <th>Token 24hr Return ($) </th>
          <th>FLI 24hr Return ($)</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(
          ({
            timestamp,
            currentPrice,
            dailyPriceVolatility,
            deviationAmount,
            priceChangeInDollars,
            fliRoi
          }) => (
            <tr key={timestamp}>
              <td>{formatDate(timestamp)}</td>
              <td>{currentPrice.toFixed(2)}</td>
              <td>{dailyPriceVolatility.toFixed(2)}</td>
              <td>{deviationAmount.toFixed(2)}</td>
              <td>{priceChangeInDollars.toFixed(2)}</td>
              <td>{fliRoi.toFixed(2)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )

RenderHistoricalData.propTypes = {
  tableData: array,
  loadingText: string
}

export default RenderHistoricalData
