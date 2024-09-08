import React, { useState } from 'react';
import CarDetailsPopup from './CarDetailsPopup';

const cars = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2012,
    mileage: '208,000 Km',
    condition: 'Used',
    transmission: 'Automatic',
    fuel: 'Petrol',
    engineCapacity: '1.8L',
    description: 'A reliable family car with great mileage.',
    price: 6500000,
    seller: 'Dasun',
    endBiddingTime: '12:50:30',
  },
  // Add more cars as needed...
];

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleViewMore = (car) => {
    setSelectedCar(car);
  };

  const handleClosePopup = () => {
    setSelectedCar(null);
  };

  return (
    <div className="container mx-auto p-4">
      
    </div>
  );
};

export default CarList;
