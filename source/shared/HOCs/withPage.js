import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchData } from '../../features/RoiDetails/reducer'
import withLayout from './withLayout/component'
import withCurrentPrice from './withCurrentPrice/component'

const withPage = (Component) =>
  compose(
    connect(null, {
      onFetchCurrentPrice: fetchData
    }),
    withCurrentPrice,
    withLayout
  )(Component)

export default withPage
