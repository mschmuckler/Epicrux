import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class SeizureTable extends React.Component {
  constructor(props) {
    super(props);

    this.generateSeizureRows = this.generateSeizureRows.bind(this);
    this.generateHeaderRow = this.generateHeaderRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchSeizures();
  }

  generateSeizureRows() {
    return Object.values(this.props.seizures).map(seizure => {
      return (
        <tr key={ seizure.id } >
          <td>{ seizure.date.slice(0,10) }</td>
          <td>{ seizure.date.slice(11,16) }</td>
          <td>{ seizure.category }</td>
          <td>{ seizure.duration }</td>
        </tr>
      );
    });
  }

  generateHeaderRow() {
    return (
      <tr key="seizure-table-header" >
        <td>Date</td>
        <td>Time</td>
        <td>Category</td>
        <td>Duration</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table>
          { this.generateHeaderRow() }
          { this.generateSeizureRows() }
        </table>
      </div>
    );
  }
}

export default SeizureTable;
