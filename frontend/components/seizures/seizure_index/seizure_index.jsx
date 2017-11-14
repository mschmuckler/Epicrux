import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import SeizureTableContainer from './seizure_table_container';

const SeizureIndex = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6">
          <h1>Seizures</h1>
        </div>
        <div className="new-seizure-div center-content col-xs-6">
          <Link to="/seizure-input">
            <RaisedButton label="Add New"/>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <SeizureTableContainer/>
        </div>
      </div>
    </div>
  );
};

export default SeizureIndex;
