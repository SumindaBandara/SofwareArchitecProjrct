import React from 'react'
import NewsNewsReleaseToPromote from '/public/assets/home/news-news-release-to-promote-svgrepo-com.svg';
import VarityOptions from '/public/assets/home/platform-program-svgrepo-com.svg';
import EasyBiddingProcess from '/public/assets/home/website-seo-marketing-hitting-the-bullseye-svgrepo-com.svg';
import Secure from '/public/assets/home/forensic-institute-svgrepo-com.svg';
import ExpertSupport from '/public/assets/home/customs-officer-svgrepo-com.svg';
import Competitive from '/public/assets/home/pointer-svgrepo-com.svg';
import OnlineAuction from '/public/assets/home/todo-list-svgrepo-com.svg';


const uniqueDetails = [
  {
    title: "A Variety of Options",
    description: "Choose from a wide range of vehicles, including cars, trucks, and motorcycles, from various brands and models.",
    icon: VarityOptions,
  },
  {
    title: "Easy Bidding Process",
    description: "Our simple and intuitive bidding process makes it easy for anyone to participate, regardless of experience.",
    icon: EasyBiddingProcess,
  },
  {
    title: "Secure and Transparent Transactions",
    description: "We prioritize your security and ensure transparent transactions through our secure payment gateways.",
    icon: Secure,
  },
  {
    title: "Expert Support",
    description: "Our knowledgeable support team is always available to assist you with any questions or concerns.",
    icon: ExpertSupport,
  },
  {
    title: "Fair and Competitive Bidding",
    description: "Experience fair and competitive bidding, where the highest bidder wins.",
    icon: Competitive,
  },
  {
    title: "Convenient Online Auctions",
    description: "Bid on your dream vehicle from the comfort of your own home, anytime, anywhere.",
    icon: OnlineAuction,
  }
];
const Body = () => {
  return (
    
    <div>
        
        <h1 className=" text-4xl font-bold mb-4 text-center font-semibold " >Your Dream Ride Awaits</h1>
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white shadow-lg rounded-lg">
    
    <div className="w-full md:w-1/2">
      <img
        src="/public/assets/home/maruti.jpg"
        alt="Featured Car"
        className="w-full h-auto"
      />
    </div>
    <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
      <h1 className="text-3xl font-bold mb-4  "><span className="animate-pulse">Top Picks for You</span></h1>
      <p className="text-sm text-gray-500 mb-4">best car buy & selling platform</p>
      <h3 className="text-2xl font-semibold mb-4">Find The Best Car, Specially Handpicked for You</h3>
      <ul className="list-none text-left">
        <li className="text-gray-700 flex items-center">
          <span className="mr-2">★</span>
          Discover the thrill of car auctions and bid on your next vehicle today
        </li>
        <li className="text-gray-700 flex items-center">
          <span className="mr-2">★</span>
          Find the perfect used car at the best price with our easy-to-use bidding platform
        </li>
        <li className="text-gray-700 flex items-center">
          <span className="mr-2">★</span>
          Join our community of car enthusiasts and experience the excitement of online car auctions
        </li>
      </ul>
    </div>
  </div>

  <div className="bg-white">
      {/* Section 1: Why Choose Us */}
      <section className="text-center py-12">
      <h2 className="text-3xl font-bold mb-8">WHY CHOOSE US?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {uniqueDetails.map((detail, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <img src={detail.icon} alt={detail.title} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-lg font-bold mb-2">{detail.title}</h3>
            <p className="text-gray-600">{detail.description}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Section 2 img */}
      <section className="relative">
        <img
          src="/public/assets/home/Image-iStock.jpg"
          alt="Car lineup"
          className="w-full h-1/3 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 px-4">
          <h3 className="text-2xl font-bold mb-4">
            No Advance, No Waiting, Best One, Best Price!
          </h3>
          <p className="max-w-xl text-sm">
            Websites often use breadcrumb navigation to indicate a user's path
            through the site. The linear arrangement helps users understand the
            hierarchy and navigate back to previous steps. This principle helps
            in creating intuitive icons or visual elements that are easily
            recognized, even if parts are missing.
          </p>
        </div>
      </section>
    </div>
  </div>
  )
}

export default Body