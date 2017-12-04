import React from 'react';

class SeizureChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSeizures();
  }

  render() {
    return (
      <div>chart</div>
    );
  }
}

export default SeizureChart;
