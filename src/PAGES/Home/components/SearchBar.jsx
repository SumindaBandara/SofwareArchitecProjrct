import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center mx-auto rounded-full border border-gray-300 overflow-hidden shadow-sm w-1/2">
      <input
        type="text"
        placeholder="Find your best solution with us"
        className="flex-grow px-10 py-2 focus:outline-none"
      />
      <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-full">
        Search
      </button>
    </div>
  )
}

export default SearchBar