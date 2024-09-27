import React from 'react'

function StartBidding() {
  return (
    <div>
        <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
  
  <div class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <img src="https://via.placeholder.com/200x150" alt="Car Image" class="w-64 h-auto rounded-lg border-2 border-blue-300" />
    <div class="text-green-600 text-xl font-bold mt-4">Rs 6,500,000.00</div>
    <div class="text-red-600 text-sm">End bidding : 12:50:30</div>
  </div>

 
  <div class="ml-10 bg-white p-6 rounded-lg shadow-md">
    <form class="space-y-4">
      <div class="flex justify-between items-center">
        <label for="brand" class="font-bold">Brand</label>
        <input type="text" id="brand" class="border rounded-lg p-2 w-48" />
      </div>

      <div class="flex justify-between items-center">
        <label for="model" class="font-bold">Model</label>
        <input type="text" id="model" class="border rounded-lg p-2 w-48" />
      </div>

      <div class="flex justify-between items-center">
        <label for="year" class="font-bold">Year</label>
        <input type="text" id="year" class="border rounded-lg p-2 w-48" />
      </div>

      <div class="flex justify-between items-center">
        <label for="bitAmount" class="font-bold">Bit Amount</label>
        <input type="text" id="bitAmount" class="border rounded-lg p-2 w-48" />
      </div>

      <div class="flex justify-between items-center">
        <label for="email" class="font-bold">E-mail</label>
        <input type="email" id="email" class="border rounded-lg p-2 w-48" />
      </div>

      <div class="flex justify-between mt-6">
        <button type="submit" class="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600">Submit</button>
        <button type="reset" class="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600">Clear</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default StartBidding