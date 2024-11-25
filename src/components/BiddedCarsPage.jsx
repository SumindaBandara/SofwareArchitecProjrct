import React from 'react';
import { useCarContext } from '../Contex/CarContext';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';


function BiddedCarsPage() {
  const { biddedCars } = useCarContext();
  // console.log("Rendered Bidded Cars:", biddedCars);
  

  return (
    <div>
      <Navigation/>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Bidded Cars</h1>
      <div className="grid gap-6">
        
        {biddedCars.map((car, index) => (
          <div key={`${car.id}-${index}`} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-start">
              <img 
                src={car.image} 
                alt={car.brand} 
                className="w-48 h-32 object-cover rounded-lg"
              />
              <div className="ml-6 flex-grow">
                <h2 className="text-xl font-semibold">{car.brand} {car.model}</h2>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    
                    <p className="text-gray-600">Your Bid: 
                      <span className="text-green-600 font-bold ml-2">
                        Rs {car.userBid.toLocaleString('en-IN')}
                      </span>
                    </p>
                    <p className="text-gray-600">Bid Time: {car.bidTime}</p>
                    <p className="text-gray-600">Email: {car.userEmail}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Year: {car.year}</p>
                    <p className="text-gray-600">Condition: {car.condition}</p>
                    <p className="text-gray-600">Seller: {car.seller}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end mt-4 ">
              <Link to = "/payment">
            <button
              type="button"
              className="flex items-center w-40 py-2 text-lg rounded-lg border-2 border-green-500 bg-green-500 px-4 py-1 text-lg rounded-lg mt-10 font-medium hover:bg-black hover:text-white text-white transition "
              
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
              </svg> Checkout
            </button>
            </Link>
          </div>
          </div>
        ))}
        {biddedCars.length === 0 && (
          <p className="text-center text-gray-500">You haven't placed any bids yet.</p>
        )}
      </div>
      
    </div>
    
    </div>
  );
}
export default BiddedCarsPage;