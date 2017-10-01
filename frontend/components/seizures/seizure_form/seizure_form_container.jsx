import { connect } from 'react-redux';
import { addSeizure } from '../../../actions/seizure_actions';
import SeizureForm from './seizure_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.seizure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSeizure: (seizureInput) => dispatch(addSeizure(seizureInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeizureForm);
