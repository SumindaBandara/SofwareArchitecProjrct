import React from 'react'
import { useState } from 'react';

import PopUp from './PopUp';


function ProductCard(props,name) {

  const selectedCar =[{
    brand: 'Toyota',
    id: "1",
    image: "/public/assets/cards/car4.jpg",
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
  {
    brand: 'Honda',
    id: "2",
    image: "/public/assets/cards/car5.jpg",
    model: 'Civic',
    year: 2015,
    mileage: '150,000 Km',
    condition: 'Used',
    transmission: 'Manual',
    fuel: 'Petrol',
    engineCapacity: '1.5L',
    description: 'Sporty sedan with excellent fuel efficiency.',
    price: 7800000,
    seller: 'Priya',
    endBiddingTime: '14:30:00',
  },
  {
    brand: 'Nissan',
    id: "3",
    image: "/public/assets/cards/car6.jpg",
    model: 'Altima',
    year: 2018,
    mileage: '80,000 Km',
    condition: 'Used',
    transmission: 'CVT',
    fuel: 'Petrol',
    engineCapacity: '2.5L',
    description: 'Comfortable midsize sedan with advanced features.',
    price: 9200000,
    seller: 'Amal',
    endBiddingTime: '16:45:15',
  },
  {
    brand: 'Ford',
    id: "4",
    image: "/public/assets/cards/car7.jpg",
    model: 'Mustang',
    year: 2020,
    mileage: '30,000 Km',
    condition: 'Used',
    transmission: 'Automatic',
    fuel: 'Petrol',
    engineCapacity: '5.0L',
    description: 'Powerful sports car with iconic design.',
    price: 15000000,
    seller: 'Ravi',
    endBiddingTime: '18:00:00',
  },
  {
    brand: 'Mazda',
    id: "5",
    image: "/public/assets/cards/car8.jpg",
    model: 'CX-5',
    year: 2019,
    mileage: '45,000 Km',
    condition: 'Used',
    transmission: 'Automatic',
    fuel: 'Diesel',
    engineCapacity: '2.2L',
    description: 'Stylish SUV with great handling and comfort.',
    price: 11500000,
    seller: 'Chamathka',
    endBiddingTime: '20:15:45',
  },
  {
    brand: 'Volkswagen',
    id: "6",
    image: "/public/assets/cards/car9.jpg",
    model: 'Golf',
    year: 2017,
    mileage: '100,000 Km',
    condition: 'Used',
    transmission: 'Manual',
    fuel: 'Petrol',
    engineCapacity: '1.4L',
    description: 'Compact hatchback with German engineering.',
    price: 8500000,
    seller: 'Nuwan',
    endBiddingTime: '22:30:30',
  },
  {
    brand: 'BMW',
    id: "7",
    image: "/public/assets/cards/car10.jpg",
    model: '3 Series',
    year: 2021,
    mileage: '15,000 Km',
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
    brand: 'Hyundai',
    id: "8",
    image: "/public/assets/cards/car11.jpg",
    model: 'Tucson',
    year: 2016,
    mileage: '120,000 Km',
    condition: 'Used',
    transmission: 'Automatic',
    fuel: 'Diesel',
    engineCapacity: '2.0L',
    description: 'Practical SUV with spacious interior.',
    price: 8900000,
    seller: 'Malini',
    endBiddingTime: '13:45:15',
  },
  {
    brand: 'Mercedes-Benz',
    id: "9",
    image: "/public/assets/cards/car12.jpg",
    model: 'C-Class',
    year: 2022,
    mileage: '5,000 Km',
    condition: 'Used',
    transmission: 'Automatic',
    fuel: 'Petrol',
    engineCapacity: '2.0L',
    description: 'Premium luxury sedan with exceptional comfort.',
    price: 22000000,
    seller: 'Kasun',
    endBiddingTime: '15:30:00',
  },];
  

  const [popupVisible, setPopupVisible] = useState(false);
  const [SelectedCar, setSelectedCar] = useState(null);

  const handleViewMore = () => {
    // Find the corresponding car data from your selectedCar array
    const carData = selectedCar.find(car => car.id === props.id);
    setSelectedCar(carData);
    setPopupVisible(true);
  };


  return (
    <div className='h-[432px] relative'>
        <div>
            <img src={props.image} alt="" className='w-full h-full object-cover'/>
        </div>
        <div>
        <div className="mt-4">
        <div className=" flex flex-col justify-center">
          <span className="inline text-2xl font-semibold text-center">{props.name}</span>
          <span className="inline font-semibold"><b>Year : </b>{props.year}</span>
        </div >
        <p className="text-sm flex-shrink"><b>Milage : </b>{props.description}</p>
        <div className="mt-2">
          <button
            type="button"
            className="border-2 border-green-500 bg-green-500 px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white text-white transition"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      </div>
        </div>

        <PopUp trigger={popupVisible} setTrigger={setPopupVisible}>
          {SelectedCar &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-lg relative">
          <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setPopupVisible(false)}
            >
            x
            </button>
            <div className="flex">
              <div className="w-1/3">
                <div className="w-full h-32 bg-gray-300 mb-4"></div>
                <div className="flex space-x-2">
                  <div className="w-16 h-16 bg-gray-300"></div>
                  <div className="w-16 h-16 bg-gray-300"></div>
                  <div className="w-16 h-16 bg-gray-300"></div>
                </div>
              </div>
              <div className="w-2/3 pl-4">
          {/* Use selectedCar[0] to access the first car's details */}
          <p><strong>Brand:</strong> {selectedCar.brand}</p>
          <p><strong>Model:</strong> {selectedCar.model}</p>
          <p><strong>Year:</strong> {selectedCar.year}</p>
          <p><strong>Mileage:</strong> {selectedCar.mileage}</p>
          <p><strong>Condition:</strong> {selectedCar.condition}</p>
          <p><strong>Transmission:</strong> {selectedCar.transmission}</p>
          <p><strong>Fuel:</strong> {selectedCar.fuel}</p>
          <p><strong>Engine Capacity:</strong> {selectedCar.engineCapacity}</p>
          <p><strong>Description:</strong> {selectedCar.description}</p>
        </div>
            </div>
            <div className="mt-4 text-green-500 font-bold">
              Rs {selectedCar.price}.00
              <p className="text-sm text-gray-500">For sale by {selectedCar.seller}</p>
              <p className="text-sm text-gray-500">End bidding: {selectedCar.endBiddingTime}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Call</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Chat</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Start Bidding</button>
            </div>
          </div>
        </div>
        }
      </PopUp>

    </div>
  )
}



export default ProductCard
