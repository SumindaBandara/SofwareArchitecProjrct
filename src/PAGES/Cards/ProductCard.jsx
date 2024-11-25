import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../../Contex/CarContext';
import PopUp from './PopUp';

function ProductCard(props) {
  const cars =[{
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
];
//new
const navigates = useNavigate();
const { updateCarBid } = useCarContext();

const handleStartBiddings = () => {
  if (SelectedCar) {
    navigate('/startbid', { state: SelectedCar });
  }
};
  const selectedCarIndex = location.state?.selectedCarIndex;

  // Use the selected car index to get the selected car from the cars array
  const selectedCar = cars[selectedCarIndex];

  const initialRemainingTime = convertTimeToSeconds(props.endBiddingTime);
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);
  function convertTimeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    // Pad single-digit values with leading zeros
  const formattedHours = h.toString().padStart(2, '0');
  const formattedMinutes = m.toString().padStart(2, '0');
  const formattedSeconds = s.toString().padStart(2,   
 '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
 
  const [popupVisible, setPopupVisible] = useState(false);
  const [SelectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate();

  const handleViewMore = () => {
    const carData = cars.find(car => car.id === props.id);
    if (carData) {
      setSelectedCar({
        ...carData,
        currentTime: formatTime(remainingTime) // Pass the current countdown time
      });
      setPopupVisible(true);
    }
  };

  const handleStartBidding = () => {
    if (SelectedCar) {
      navigate('/startbid', { 
        state: { 
          id: SelectedCar.id, // Add the carId here
          price: SelectedCar.price, 
          endBiddingTime: formatTime(remainingTime),
          image: SelectedCar.image,
          brand: SelectedCar.brand,
          model: SelectedCar.model,
          year: SelectedCar.year,
          condition: SelectedCar.condition,
          seller: SelectedCar.seller,
          initialSeconds: remainingTime
        } 
      });
    }
  };
  
  return (
    <div className='h-[450px] w-[300px] flex flex-col justify-between items-center p-4 border rounded-lg shadow-md'>
      <div className='w-200 h-100 overflow-hidden rounded-lg'>
    <img src={props.image} alt="" className='w-full h-full object-cover'/>
      </div>
      <div>
        <div className="mt-4">
          <div className="flex flex-col justify-center">
            <span className="inline text-2xl font-semibold text-center">{props.name}</span>
            <span className="inline font-semibold"><b>Year : </b>{props.year}</span>
          </div>
          <p className="text-sm flex-shrink"><b>Mileage : </b>{props.description}</p>
          <p className="text-sm text-gray-500">
                  End bidding: {formatTime(remainingTime) === "00:00:00" ? "Ended" : formatTime(remainingTime)}
                </p>
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
        {SelectedCar && (
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
                  <img src={SelectedCar.image} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className="w-2/3 pl-4">
                  <p><strong>Brand:</strong> {SelectedCar.brand}</p>
                  <p><strong>Model:</strong> {SelectedCar.model}</p>
                  <p><strong>Year:</strong> {SelectedCar.year}</p>
                  <p><strong>Mileage:</strong> {SelectedCar.mileage}</p>
                  <p><strong>Condition:</strong> {SelectedCar.condition}</p>
                  <p><strong>Transmission:</strong> {SelectedCar.transmission}</p>
                  <p><strong>Fuel:</strong> {SelectedCar.fuel}</p>
                  <p><strong>Engine Capacity:</strong> {SelectedCar.engineCapacity}</p>
                  <p><strong>Description:</strong> {SelectedCar.description}</p>
                </div>
              </div>
              <div className="mt-4 text-green-500 font-bold">
                Rs {SelectedCar.price}.00
                <p className="text-sm text-gray-500">For sale by {SelectedCar.seller}</p>
                <p className="text-sm text-gray-500">
                  End bidding: {formatTime(remainingTime) === "00:00:00" ? "Ended" : formatTime(remainingTime)}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded">Call</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">Chat</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    if (formatTime(remainingTime) === "00:00:00") {
                      alert("Bidding has ended");
                    } else {
                      handleStartBidding();
                    }
                  }}
                >
                  Start Bidding
                </button>
              </div>
            </div>
          </div>
        )}
      </PopUp>

    </div>
  );
}

export default ProductCard;