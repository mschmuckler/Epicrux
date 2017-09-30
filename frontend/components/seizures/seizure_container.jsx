import { connect } from 'react-redux';
import { fetchSeizure, addSeizure } from '../../actions/seizure_actions';
import SeizureIndex from 'seizure_index';

const mapStateToProps = (state) => {
  return {
    seizures: state.entities.seizures,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSeizure: (seizureId) => dispatch(fetchSeizure(seizureId)),
    addSeizure: (seizureInput) => dispatch(addSeizure(seizureInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeizureIndex);
