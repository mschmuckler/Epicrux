import React from 'react';
import {
  militaryToMeridiem,
  secondsToWords,
} from './../../../util/time_util';
import {
  BootstrapTable,
  TableHeaderColumn,
} from 'react-bootstrap-table';

class SeizureTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'date',  // default sort column name
      defaultSortOrder: 'desc',  // default sort order
    };

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
          time: militaryToMeridiem(seizure.date.slice(11,16)),
          category: seizure.category,
          duration: secondsToWords(seizure.duration),
        }
      );
    });
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ this.generateSeizureTableData() }
          options={ this.options }
          scrollTop={ 'Top' }
          height='400px'
          striped
          hover
          condensed
        >
          <TableHeaderColumn dataField='id' isKey hidden></TableHeaderColumn>
          <TableHeaderColumn dataField='date' dataSort>Date</TableHeaderColumn>
          <TableHeaderColumn dataField='time'>Time</TableHeaderColumn>
          <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
          <TableHeaderColumn dataField='duration'>Duration</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default SeizureTable;
