import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchData } from '../../features/RoiDetails/reducer'
import WithCurrentPrice from './withCurrentPrice/component'
import WithLayout from './withLayout/component'

const withPage = (Component) =>
  compose(
    connect(null, {
      onFetchCurrentPrice: fetchData
    }),
    WithLayout,
    WithCurrentPrice
  )(Component)

export default withPage
