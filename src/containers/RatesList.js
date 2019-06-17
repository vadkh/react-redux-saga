import { connect } from 'react-redux';

import { changeBase } from '../actions';
import RatesList from '../components/RatesList';

const mapStateToProps = state => ({
  rates: state.rates,
  base: state.base
});

const mapDispatchToProps = {
  changeBase
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatesList);
