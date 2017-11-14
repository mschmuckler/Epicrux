import React from 'react';
import {
  BootstrapTable,
  TableHeaderColumn,
} from 'react-bootstrap-table';

class SeizureTable extends React.Component {
  constructor(props) {
    super(props);

    this.generateSeizureTableData = this.generateSeizureTableData.bind(this);
  }

  componentDidMount() {
    this.props.fetchSeizures();
  }

  generateSeizureTableData() {
    return Object.values(this.props.seizures).map(seizure => {
      return (
        {
          id: seizure.id,
          date: seizure.date.slice(0,10),
          time: seizure.date.slice(11,16),
          category: seizure.category,
          duration: seizure.duration,
        }
      );
    });
  }

  render() {
    return (
      <div>
        <BootstrapTable data={ this.generateSeizureTableData() }>
          <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
          <TableHeaderColumn dataField='time'>Time</TableHeaderColumn>
          <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
          <TableHeaderColumn dataField='duration'>Duration</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default SeizureTable;
