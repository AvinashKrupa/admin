import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  
    datasets: [
      {
        label: 'status1',
        
        borderColor: "#007c7c",
        borderWidth: 2,
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        lineTension: false,
        pointBorderColor: '#007c7c',
        pointBackgroundColor: '#007c7c',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#007c7c',
        pointHoverBorderColor: '#007c7c',
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