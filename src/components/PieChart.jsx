import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Distribution of Sales',
    },
    labels: ['January', 'February', 'March', 'April', 'May'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const chartSeries = [12, 19, 3, 5, 2]; // Corresponding to the labels

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="pie" height={350} />
    </div>
  );
}

export default PieChart;
