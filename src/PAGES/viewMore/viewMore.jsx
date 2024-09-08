import React, { useState } from 'react';

const viewMore = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleViewMore = () => {
    setSelectedCar({
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
    });
  };

  const handleClosePopup = () => {
    setSelectedCar(null);
  };

  return (
    <div className="App">
      <button
        onClick={handleViewMore}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        View More
      </button>

      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              &times;
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
              Rs {selectedCar.price.toLocaleString('en-US')}.00
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
      )}
    </div>
  );
};

export default viewMore;
