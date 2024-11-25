import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCarContext } from '../../Contex/CarContext';

function StartBidding() {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateCarBid, cars } = useCarContext();

  

  // Debug log the location state
  // console.log('Location State:', location.state);

  // Get the full car data from location state
  const carData = location.state || {};
  // console.log('Car Data:', carData);

  const {
    id: carId = null,
    price: initialPrice = 6600000,
    endBiddingTime = "12:50:30",
    image = "https://via.placeholder.com/200x150",
    brand = '',
    model = '',
    year = '',
    condition = '',
    seller = ''
  } = carData;

  // Debug log the extracted values
  // console.log('Extracted Values:', {
  //   carId,
  //   initialPrice,
  //   endBiddingTime,
  //   image,
  //   brand,
  //   model,
  //   year,
  //   condition,
  //   seller
  // });

  const [topBid, setTopBid] = useState(initialPrice);
  const [bidAmount, setBidAmount] = useState(initialPrice);
  const [email, setEmail] = useState('');

  const initialRemainingTime = convertTimeToSeconds(endBiddingTime);
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);

  function convertTimeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bid = parseFloat(bidAmount);

    console.log('Submit attempt with:', {
      carId,
      bid,
      email,
      topBid
    });

    if (!carId) {
      console.error('No car ID provided');
      alert("Error: No car ID provided");
      return;
    }

    if (isNaN(bid)) {
      console.error('Invalid bid amount');
      alert("Please enter a valid bid amount");
      return;
    }

    if (bid <= topBid) {
      console.error('Bid not high enough');
      alert("Your bid must be higher than the current top bid.");
      return;
    }

    try {
      console.log('Attempting to update bid with:', {
        carId,
        bid,
        email
      });

      // Update the bid
      setTopBid(bid);
      updateCarBid(carData.id, bid, email);

      // Clear form
      setBidAmount('');
      setEmail('');

      // Show success message
      alert("Bid placed successfully! View it in My Bids page.");

      // Navigate to bids page
      navigate('/mybid');
    } catch (error) {
      console.error('Detailed error information:', {
        error,
        errorMessage: error.message,
        errorStack: error.stack
      });
      alert("There was an error submitting your bid. Please try again.");
    }
  };

  const handleReset = () => {
    setBidAmount('');
    setEmail('');
  };

  // Debug log when component renders
  // console.log('Current state:', {
  //   topBid,
  //   bidAmount,
  //   email,
  //   remainingTime
  // });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
        <img src={image} alt="Car" className="w-64 h-auto rounded-lg border-2 border-blue-300" />
        <div className="text-green-600 text-xl font-bold mt-4">Rs {bidAmount.toLocaleString('en-IN')}.00</div>
        <div className="text-red-600 text-sm">End bidding : {formatTime(remainingTime)}</div>
      </div>

      <div className="ml-10 bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <label htmlFor="TopBid" className="font-bold">Top Bid</label>
            <input type="text" id="TopBid" className="border rounded-lg p-2 w-48" value={`Rs ${topBid.toLocaleString('en-IN')}`} readOnly />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="bidAmount" className="font-bold">Bid Amount</label>
            <input 
              type="number" 
              id="bidAmount" 
              className="border rounded-lg p-2 w-48" 
              value={bidAmount} 
              onChange={(e) => {
                console.log('Bid amount changed:', e.target.value);
                setBidAmount(e.target.value);
              }} 
              min={topBid + 1} 
              required 
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="font-bold">E-mail</label>
            <input 
              type="email" 
              id="email" 
              className="border rounded-lg p-2 w-48" 
              value={email} 
              onChange={(e) => {
                console.log('Email changed:', e.target.value);
                setEmail(e.target.value);
              }} 
              required 
            />
          </div>
          <div className="flex justify-between mt-6">
            <button type="submit" className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600">Submit</button>
            <button type="button" className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600" onClick={handleReset}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StartBidding;