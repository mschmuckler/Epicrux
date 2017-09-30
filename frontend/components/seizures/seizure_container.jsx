import { connect } from 'react-redux';
import {
  fetchSeizure,
  fetchSeizures,
  addSeizure
} from '../../actions/seizure_actions';
import SeizureIndex from './seizure_index';

const mapStateToProps = (state) => {
  return {
    seizures: state.entities.seizures,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSeizure: (seizureId) => dispatch(fetchSeizure(seizureId)),
    fetchSeizures: () => dispatch(fetchSeizures()),
    addSeizure: (seizureInput) => dispatch(addSeizure(seizureInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeizureIndex);
