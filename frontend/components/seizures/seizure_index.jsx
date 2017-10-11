import React from 'react';

class SeizureIndex extends React.Component {
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
          <td>{ seizure.category }</td>
          <td>{ seizure.date }</td>
          <td>{ seizure.duration }</td>
        </tr>
      );
    });
  }

  generateHeaderRow() {
    return (
      <tr key="seizure-table-header" >
        <td>Category</td>
        <td>Date</td>
        <td>Duration</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1>Seizure index page</h1>
        <table>
          <thead>
            { this.generateHeaderRow() }
          </thead>
          <tbody>
            { this.generateSeizureRows() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SeizureIndex;
