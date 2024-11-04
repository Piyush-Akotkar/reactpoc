import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    title: {
      text: 'Sales Data',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: true,
    },
    fill: {
      opacity: 1,
    },
  };

  const chartSeries = [
    {
      name: 'Sales',
      data: [12, 19, 3, 5, 2],
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
}

export default BarChart;
