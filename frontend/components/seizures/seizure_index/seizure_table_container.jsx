import { connect } from 'react-redux';
import {
  fetchSeizure,
  fetchSeizures,
  addSeizure
} from '../../../actions/seizure_actions';
import SeizureTable from './seizure_table';

const mapStateToProps = (state) => {
  return {
    seizures: state.entities.seizures,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSeizure: (seizureId) => dispatch(fetchSeizure(seizureId)),
    fetchSeizures: () => dispatch(fetchSeizures()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeizureTable);
