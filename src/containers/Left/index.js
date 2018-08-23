import { connect } from 'react-redux';
import { left } from '../../actions/actions';
import Button from '../../../components/Button';

const mapStateToProps = (state) => {
  return {
    name: '<',
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(left());
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
