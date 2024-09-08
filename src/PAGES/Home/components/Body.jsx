import React from 'react'

const Body = () => {
  return (
    
    <div>
        
        <h1 className="underline text-4xl font-bold mb-4 text-center font-semibold " >Featured Cars</h1>
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white shadow-lg rounded-lg">
    
    <div className="w-full md:w-1/2">
      <img
        src="/public/assets/home/maruti.jpg"
        alt="Featured Car"
        className="w-full h-auto"
      />
    </div>
    <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
      <h1 className="text-3xl font-bold mb-4  "><span class="animate-pulse">Top Picks for You</span></h1>
      <p className="text-sm text-gray-500 mb-4">best car buy & selling platform</p>
      <h3 className="text-2xl font-semibold mb-4">Find The Best Car, Specially Handpicked for You</h3>
      <ul className="list-none text-left">
        <li className="text-gray-700 flex items-center">
          <span className="mr-2">★</span>
          Royalty free PNGs with transparent backgrounds matching
        </li>
        <li className="text-gray-700 flex items-center">
          <span className="mr-2">★</span>
          Royalty free PNGs with transparent backgrounds matching
        </li>
        <li className="text-gray-700 flex items-center">
          <span className="mr-2">★</span>
          Royalty free PNGs with transparent backgrounds matching
        </li>
      </ul>
    </div>
  </div>

  <div className="bg-white">
      {/* Section 1: Why Choose Us */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-8">WHY CHOOSE US?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4"
              >
                <div
                  className={`${
                    index === 2
                      ? 'bg-white border-white'
                      : 'bg-white'
                  } w-16 h-16 rounded-full mb-4`}
                />
                <h3 className="text-lg font-bold mb-2">A Variety of Options</h3>
                <p className="text-gray-600">
                  Selective attention is the process by which users focus on
                  specific elements in their environment while ignoring others.
                </p>
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