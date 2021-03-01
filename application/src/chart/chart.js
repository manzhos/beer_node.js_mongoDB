// displaing selected beer details
// displaing selected beer details

import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  render() {
    return (
      <>
        <Bar
          data={this.state.chartData}
          height={80}
          onElementsClick={(elements) => {
            if (elements.length != 0) {
              //console.log(elements, 'e');
              this.props.Search(elements[0]._index + 1);
            }
          }}
        />
      </>
    );
  }
}

export default Chart;
