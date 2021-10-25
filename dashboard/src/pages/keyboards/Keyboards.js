import './keyboards.css'
import FeaturedInfo2 from '../../components/featuredInfo/FeaturedInfo2'
import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


const data = {
  labels: ['Logitech', 'Hyperx', 'Redragon', 'Asus', 'Corsair'],
  datasets: [
    {
      label: 'Cantidad de productos',
      data: [6, 3, 4, 1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Keyboards = () => (
  <>
     <div>
     <Bar data={data} options={options} />
     <FeaturedInfo2/>
     </div>

  
    
    
  </>
);

export default Keyboards;