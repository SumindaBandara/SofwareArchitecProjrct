import ProductCard from './ProductCard';
import Navigation from '../../components/Navigation';
import { Navigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';
import SignInPage from '../auth/Sign-in/SignInPage';
import Footer from '../Home/components/Footer';
import SearchBar from '../Home/components/SearchBar';




import React from 'react'
import { useState } from 'react';

function Product() {
  const { user, isSignedIn, isLoaded } = useUser();
  

    const products = [
      {
        categoryId: "1",
        image: "/public/assets/cards/vezel.jpg",
        id: "1",
        name: "Honda Vezel",
        year: "2019",
        description: "A reliable family car with great mileage.",
        endBiddingTime: "00:00:10",
    },
    {
        categoryId: "3",
        image: "/public/assets/cards/fit.jpg",
        id: "2",
        name: "Honda Fit",
        year: "2020",
        description: "Sporty sedan with excellent fuel efficiency.",
        endBiddingTime: "00:00:00",
    },
    {
        categoryId: "2",
        image: "/public/assets/cards/wagon-r.jpg",
        id: "3",
        name: "Suzuki Wagon-R",
        year: "2019",
        description: "Comfortable midsize sedan with advanced features.",
        endBiddingTime: "16:45:15",
    },
    {
        categoryId: "1",
        image: "/public/assets/cards/suv.jpg",
        id: "4",
        name: "KIA Suv",
        year: "2018",
        description: "Powerful sports car with iconic design.",
        endBiddingTime: "18:00:00",
    },
    {
        categoryId: "3",
        image: "/public/assets/cards/primio.jpg",
        id: "5",
        name: "Toyota Premio",
        year: "2019",
        description: "Stylish SUV with great handling and comfort.",
        endBiddingTime: "20:15:45",
    },
    {
        categoryId: "5",
        image: "/public/assets/cards/prious.jpg",
        id: "6",
        name: "Toyota Prius",
        year: "2016",
        description: "Compact hatchback with German engineering.",
        endBiddingTime: "22:30:30",
    },
    {
        categoryId: "4",
        image: "/public/assets/cards/Toyota-Aqua.jpg",
        id: "7",
        name: "Toyota Aqua",
        year: "2028",
        description: "Luxury sedan with cutting-edge technology.",
        endBiddingTime: "10:00:00",
    },
    {
        categoryId: "4",
        image: "/public/assets/cards/Toyota-Vitz.jpg",
        id: "8",
        name: "Toyota Vitz",
        year: "2021",
        description: "Practical SUV with spacious interior.",
        endBiddingTime: "13:45:15",
    },
      ];
      
    
      if (!isSignedIn) {
        return <Navigate to="/signin" />;
      }

  return (
    
    <div>
      
      <Navigation/>
      <div className="flex justify-center items-center">
        <SearchBar/>
      </div>
      

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
              endBiddingTime={el.endBiddingTime}
            />
          );
        })}
      </div>
    </section>
    <Footer/>

    </div>
  )
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }
}

export default Product
