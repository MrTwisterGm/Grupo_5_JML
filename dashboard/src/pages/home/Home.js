import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


const data = {
  labels: ['Logitech', 'Hyperx', 'Redragon', 'Asus', 'Turle Beach', 'Corsair', 'Astro'],
  datasets: [
    {
      label: 'Cantidad de productos',
      data: [16, 12, 9, 6, 4, 2, 8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(298, 155, 505, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(298, 155, 505, 1)',
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

const Home = () => (
  <>
     <div>
     <Bar data={data} options={options} />
     <FeaturedInfo/>
     </div>

  
    
    
  </>
);

export default Home;