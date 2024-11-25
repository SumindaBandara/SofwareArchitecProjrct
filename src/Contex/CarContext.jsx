import React, { createContext, useState, useContext } from 'react';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([
    // Your initial cars data
    {
      brand: 'Honda',
      id: "1",
      image: "/public/assets/cards/vezel.jpg",
      model: 'Vezel',
      year: 2019,
      mileage: '60,000 Km',
      condition: 'Used',
      transmission: 'Automatic',
      fuel: 'Petrol',
      engineCapacity: '1.8L',
      description: 'A reliable family car with great mileage.',
      price: 6500000,
      seller: 'Dasun',
      endBiddingTime: '00:00:10',
    },
    {
      brand: 'Honda',
      id: "2",
      image: "/public/assets/cards/fit.jpg",
      model: 'Fit',
      year: 2020,
      mileage: '50,000 Km',
      condition: 'Used',
      transmission: 'Auto',
      fuel: 'Petrol',
      engineCapacity: '1.5L',
      description: 'Sporty sedan with excellent fuel efficiency.',
      price: 7800000,
      seller: 'Priya',
      endBiddingTime: '14:30:00',
    },
    {
      brand: 'Suzuki',
      id: "3",
      image: "/public/assets/cards/wagon-r.jpg",
      model: 'Wagon-R',
      year: 201,
      mileage: '120,000 Km',
      condition: 'Used',
      transmission: 'Auto',
      fuel: 'Petrol',
      engineCapacity: '2.5L',
      description: 'Comfortable midsize sedan with advanced features.',
      price: 9200000,
      seller: 'Amal',
      endBiddingTime: '16:45:15',
    },
    {
      brand: 'KIA',
      id: "4",
      image: "/public/assets/cards/suv.jpg",
      model: 'Suv',
      year: 2018,
      mileage: '40,000 Km',
      condition: 'Used',
      transmission: 'Automatic',
      fuel: 'Diesel',
      engineCapacity: '5.0L',
      description: 'Powerful sports car with iconic design.',
      price: 15000000,
      seller: 'Ravi',
      endBiddingTime: '18:00:00',
    },
    {
      brand: 'Toyota',
      id: "5",
      image: "/public/assets/cards/primio.jpg",
      model: 'Premio',
      year: 2019,
      mileage: '50,000 Km',
      condition: 'Used',
      transmission: 'Automatic',
      fuel: 'Petrol',
      engineCapacity: '2.2L',
      description: 'Stylish SUV with great handling and comfort.',
      price: 11500000,
      seller: 'Chamathka',
      endBiddingTime: '20:15:45',
    },
    {
      brand: 'Toyota',
      id: "6",
      image: "/public/assets/cards/prious.jpg",
      model: 'Prius',
      year: 2016,
      mileage: '42,000 Km',
      condition: 'Used',
      transmission: 'Auto',
      fuel: 'Petrol',
      engineCapacity: '1.4L',
      description: 'Compact hatchback with German engineering.',
      price: 8500000,
      seller: 'Nuwan',
      endBiddingTime: '22:30:30',
    },
    {
      brand: 'Toyota',
      id: "7",
      image: "/public/assets/cards/Toyota-Aqua.jpg",
      model: 'Aqua',
      year: 2028,
      mileage: '220,000 Km',
      condition: 'Used',
      transmission: 'Automatic',
      fuel: 'Petrol',
      engineCapacity: '2.0L',
      description: 'Luxury sedan with cutting-edge technology.',
      price: 18000000,
      seller: 'Dilshan',
      endBiddingTime: '10:00:00',
    },
    {
      brand: 'Toyota',
      id: "8",
      image: "/public/assets/cards/Toyota-Vitz.jpg",
      model: 'Vitz',
      year: 2021,
      mileage: '110,000 Km',
      condition: 'Used',
      transmission: 'Automatic',
      fuel: 'Petrol',
      engineCapacity: '2.0L',
      description: 'Practical SUV witnpm run devh spacious interior.',
      price: 8900000,
      seller: 'Malini',
      endBiddingTime: '13:45:15',
    },
  ]);
  // console.log('Cars:', cars);

  const [biddedCars, setBiddedCars] = useState([]);

  const updateCarBid = (carId, bid, email) => {
    // Update car prices
    setCars(prevCars =>
      prevCars.map(car =>
        car.id === carId ? { ...car, currentBid: bid, price: bid } : car
      )
    );

    // Find the car with updated bid
    const carToBid = cars.find(car => car.id === carId);

    if (carToBid) {
      const bidTime = new Date().toLocaleString();
      const updatedBid = {
        ...carToBid,
        userBid: bid,
        bidTime,
        userEmail: email,
      };

      // Update or add the bid in biddedCars
      setBiddedCars(prevBids => {
        const existingBidIndex = prevBids.findIndex(bid => bid.id === carId);
        if (existingBidIndex !== -1) {
          const updatedBids = prevBids.map((bid, index) =>
            index === existingBidIndex ? updatedBid : bid
          );
          return updatedBids;
        } else {
          const newBids = [...prevBids, updatedBid];
        return newBids;
        }
      });
    }
  };
  

  return (
    <CarContext.Provider value={{ cars, biddedCars, updateCarBid }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);