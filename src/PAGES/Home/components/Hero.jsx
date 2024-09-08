import React from 'react'

const Hero = () => {
  return (
    <div>
        
        <section className="py-8 px-16">
      <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f4f4]">
        <div className="flex flex-col justify-center p-16 gap-y-4">
          <span className="block rounded-full px-2 py-1 text-xs  w-fit bg-[#febc26] animate-bounce">
            BEST BITS
          </span>
          <h1 className="text-4xl font-semibold">
          The Easiest Way to Buy And Sell Car  For Yourself
          </h1>
          <p>
          Find the best deals and connect with trusted sellers. Your car journey starts here!
          </p>
          <a
            to="/shop"
            className="px-4 py-2 text-black font-medium bg-yellow-200 rounded w-fit"
          >
          Explor Car
            
          </a>
        </div>
        <div className=" relative">
          <img
            src="/public/assets/home/cars.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>

    </div>
  )
}

export default Hero
