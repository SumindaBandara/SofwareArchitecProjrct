import ProductCard from './ProductCard';
import Navigation from '../../components/Navigation';
import viewMore from '../viewMore/viewMore';


import React from 'react'
import { useState } from 'react';

function Product() {
  
  

    const products = [
        {
          categoryId: "1",
          image: "/public/assets/cards/car4.jpg",
          id: "1",
          name: "Yasintha",
          year: "2019/01/03",
          description:
            "60000km",
        },
        {
          categoryId: "3",
          image: "/public/assets/cards/car4.jpg",
          id: "2",
          name: "Sachini",
          year: "2019/01/03",
          description:
            "50000km",
        },
        {
          categoryId: "2",
          image: "/public/assets/cards/car4.jpg",
          id: "3",
          name: "Yasindu",
          year: "2019/01/03",
          description:
            "120000km",
        },
        {
          categoryId: "1",
          image: "/public/assets/cards/car4.jpg",
          id: "4",
          name: "Tharuka",
          year: "2019/01/03",
          description:
            "40000km",
        },
        {
          categoryId: "3",
          image: "/public/assets/cards/car4.jpg",
          id: "5",
          name: "Ayesh",
          year: "2019/01/03",
          description:
            "50000km",
        },
        {
          categoryId: "5",
          image: "/public/assets/cards/car4.jpg",
          id: "6",
          name: "Suminda",
          year: "2019/01/03",
          description:
            "420000km",
        },
        {
          categoryId: "4",
          image: "/public/assets/cards/car4.jpg",
          id: "7",
          name: "Sumi pawla",
          year: "2019/01/03",
          description:
            "220000km",
        },
        {
          categoryId: "4",
          image: "/public/assets/cards/car4.jpg",
          id: "8",
          name: "sumi doughter",
          year: "2019/01/03",
          description:
            "110000km",
        },
      ];

  return (
    
    <div>
      <Navigation/>
      

<section className="py-8 px-16">
      <h1 className="text-4xl font-semibold text-center">Choose Your Car</h1>
      
      <div className="py-8 grid grid-cols-4 gap-6 mt-4">
        {products.map((el) => {
          return (
            <ProductCard
              key={el.id}
              id={el.id}
              image={el.image}
              name={el.name}
              year={el.year}
              description={el.description}
            />
          );
        })}
      </div>
    </section>

    </div>
  )
}

export default Product
