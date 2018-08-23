import { connect } from 'react-redux';
import { right } from '../../actions/actions';
import Button from '../../../components/Button';

const mapStateToProps = () => {
  return {
    name: '>',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(right());
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
