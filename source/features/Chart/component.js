import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoricalData } from '../Home/reducer'

const range = (n = 91) =>
  Array.from({ length: n }, (v, i) => i).reduce(
    (acc, val) => acc.concat(val),
    []
  ) //?
const ethData = ({ ethData = [], fliData = [] }) => (
  {
    label: 'Ethereum Price',
    data: ethData,
    borderColor: 'purple',
    pointStyle: 'circle',
    pointRadius: 10,
    fill: true,
    yAxisID: 'y1'
  },
  {
    label: 'FLI Price',
    data: historicalFliData.map((y) => y.currentPrice),
    borderColor: 'steelblue',
    pointStyle: 'circle',
    pointRadius: 4,
    fill: false,
    yAxisID: 'y1'
  }
)

const getDailyRoi = (data) =>
  data
    .map((y) => 1000 * (1 + (y.dailyPriceVolatility.toFixed(2) / 100) * 2))
    .map((x) => x - 1000)
const createChartData = ({ historicalData = [], historicalFliData = [] }) => ({
  labels:
    historicalFliData.length < 90 ? range(historicalFliData.length) : range(90),
  datasets: [
    {
      label: 'Ethereum ROI ($1000)',
      data: getDailyRoi(historicalData),
      borderColor: 'gray',
      backgroundColor: '#6091E3',
      yAxisID: 'y',
      pointStyle: 'star',
      pointRadius: 8,
      fill: false
    },
    {
      label: 'FLI 2x ROI ($1000)',
      data: getDailyRoi(historicalFliData),
      borderColor: 'teal',
      backgroundColor: '#B5A4DC',
      yAxisID: 'y',
      pointStyle: 'star',
      pointRadius: 8,
      fill: false
    }
  ]
})

const getPrice = ({ currentPrice }) => currentPrice
const createPriceChartData = ({
  historicalData = [],
  historicalFliData = []
}) => ({
  labels:
    historicalFliData.length < 90 ? range(historicalFliData.length) : range(90),
  datasets: [
    {
      label: 'Ethereum Price',
      data: historicalData.map(getPrice),
      borderColor: 'gray',
      backgroundColor: '#6091E3',
      pointStyle: 'circle',
      pointRadius: 2.5,
      fill: false,
      yAxisID: 'y'
    },
    {
      label: 'FLI Price',
      data: historicalFliData.map(getPrice),
      borderColor: 'teal',
      backgroundColor: '#B5A4DC',
      pointStyle: 'circle',
      pointRadius: 2.5,
      fill: false,
      yAxisID: 'y'
    }
  ]
})

const defaultChartOptions = {
  responsive: true,
  interaction: {},
  plugins: {
    title: 'default ttitle',
    display: true,
    tooltip: {
      usePointStyle: true,
      callbacks: {
        title: (context) => {
          console.log({ context })
          return `Day ${context[0].label}`
        },
        footer: (items) => {
          console.log({ items })
          return `footer! - Add aggregation of $1000 investment to this point`
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        title: 'Last 90 days'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Price in USD ($)'
      },
      stacked: true,
      min: -1000,
      suggestedMax: 1000
    }
  }
}

const createChartOptions = (obj = {}) => ({
  ...obj
})

const roiOptions = createChartOptions({
  ...defaultChartOptions,

  plugins: {
    tooltip: {
      ...defaultChartOptions.plugins.tooltip,
      footer: (items) => {
        console.log({ items })
        return `footer! - Add aggregation of $1000 investment to this point`
      }
    },
    display: true,
    title: {
      display: true,
      text: 'ROI Chart'
    }
  },
  scales: {
    ...defaultChartOptions.scales,
    x: {
      title: {
        display: true,
        title: 'Last 90 days'
      }
    },
    y: {
      ...defaultChartOptions.scales.y,
      min: -1000,
      max: 1500,
      stacked: true
    },
    ticks: 50
  }
})

const footer = (tooltipItems) => {
  let start = 100
  console.log({ tooltipItems })

  tooltipItems.forEach(function (tooltipItem) {
    start += tooltipItem.parsed.y
  })
  return 'Sum: ' + sum
}

const add = (x, y) => x + y
const getRawValue = ({ raw }) => raw
console.log({ roiOptions })
const chartOptions = {
  responsive: true,
  interaction: {
    intersect: true,
    mode: 'index'
  },
  plugins: {
    title: {
      display: true,
      text: 'Ethereum vs. ETH-2x-FLI Token Chart'
    },
    tooltip: {
      usePointStyle: false,
      callbacks: {
        title: (context) => {
          console.log({ context })
          return `Day ${context[0].label}`
        },
        footer: (items) => {
          console.log({ items })
          return `footer! - ${items.reduce((acc, val) => add(acc, val.raw), 0)}`
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true
      }
    },
    y: {
      title: {
        display: true,
        text: 'Price in USD ($)'
      },
      stacked: false,
      min: -1000,
      suggestedMax: 1000
    }
  }
}

const ChartComponent = () => {
  const { historicalData, historicalFliData } = useSelector((x) => {
    return x.volatilityDecayState
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (historicalData.length <= 0) dispatch(fetchHistoricalData())
  })
  const ctx = createChartData({ historicalData, historicalFliData })

  return (
    <div>
      <Line data={ctx} options={roiOptions} />
      <div>
        <h2>Ethereum vs. FLI 90 Day Price Change</h2>
        <Line
          data={createPriceChartData({ historicalData, historicalFliData })}
          options={chartOptions}
        />
      </div>
    </div>
  )
}
export default ChartComponent
