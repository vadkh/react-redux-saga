import { connect } from 'react-redux';

import { getRates } from '../actions';
import Button from '../components/Button';

const mapDispatchToProps = {
  getRates
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
