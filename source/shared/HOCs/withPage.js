import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchData } from '../../features/RoiDetails/reducer'
import withLayout from './withLayout/component'
import WithCurrentPrice from './withCurrentPrice/component'

const withPage = (Component) =>
  compose(
    connect(null, {
      onFetchCurrentPrice: fetchData
    }),
    WithCurrentPrice
  )(Component)

export default withPage
