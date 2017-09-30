import React from 'react';

class SeizureIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSeizures();
  }

  render() {
    return (
      <div>
        <h1>Seizure index page</h1>
      </div>
    );
  }
}

export default SeizureIndex;
