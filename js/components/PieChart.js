import React from "react";
import { Chart } from 'react-google-charts';

export default class PieChart extends React.Component {
  render() {
    console.log(this.props.data);
    return (<Chart
        chartType="PieChart"
        data={this.props.data}
        options={{}}
        graph_id="pie_chart"
        width="100%"
        height="400px"
        legend_toggle
    />);
  }
}