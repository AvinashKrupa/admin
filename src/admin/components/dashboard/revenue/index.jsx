import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  
    datasets: [
      {
        label: 'status1',
        
        borderColor: "rgba(32,61,118, 1)",
        borderWidth: 2,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        lineTension: false,
        pointBorderColor: 'rgba(32,61,118, 1)',
        pointBackgroundColor: 'rgba(32,61,118, 1)',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(32,61,118, 1)',
        pointHoverBorderColor: 'rgba(32,61,118, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        backgroundColor: "#99b6d0",
        pointHitRadius: 50,
        fill: true,
        gridLines: false,
        data: [65, 59, 80, 81, 56, 55, 40, 60],
      }
    
     
    ]
  };
  ;

export default class RevenueChart extends Component {
   
  render() {

    return (
      <div>
        
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
  
  }
}