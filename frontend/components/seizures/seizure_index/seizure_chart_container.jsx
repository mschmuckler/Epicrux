import { connect } from 'react-redux';
import {
  fetchSeizure,
  fetchSeizures,
  addSeizure
} from '../../../actions/seizure_actions';
import SeizureChart from './seizure_chart';

const mapStateToProps = (state) => {
  return {
    seizures: state.entities.seizures,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSeizures: () => dispatch(fetchSeizures()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeizureChart);
