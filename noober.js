window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

//  Recipe:

// Create a variable for the passengers data:
let passengerData = json

// Loop through the passengers data
for (i=0; i<json.length; i++) {
  // Create a variable to store each product in memory
  let dropOff = passengerData[i].dropoffLocation
  let pickUp = passengerData[i].pickupLocation
  let passengerDetails = passengerData[i].passengerDetails
  let passengerNumber = passengerData[i].numberOfPassengers
  let purple = passengerData[i].purpleRequested

  // Use conditional logic 
  let serviceLevel
  // if the rider has requested the luxury "Purple" level of service, i.e. purpleRequested, display "Noober Purple" as the level of service, e.g. Noober Purple Passenger: Freeman Waters...
  if (purple) {
    serviceLevel = `Noober Purple`
  // if the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car. Display "Noober XL" as the level of service.
  // A request for Noober Purple supercedes the Noober XL logic
  } else if (!purple && passengerNumber >3) {
    serviceLevel = `Noober XL`
  } else {
    serviceLevel = `Noober X`
  }

  // Create a variable for the HTML element we're going to add to

  let passengerList = document.querySelector (`.rides`)

  // Insert HTML into the passenger element using the data from each passenger

  passengerList.insertAdjacentHTML(`beforeend`,`
  <!-- A sample Noober X -->
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${serviceLevel}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerDetails.first} ${passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumber} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickUp.address}</p>
          <p>${pickUp.city}, ${pickUp.state} ${pickUp.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropOff.address}</p>
          <p>${dropOff.city}, ${dropOff.state} ${dropOff.zip}</p>
        </div>
      </div>
    </div>

    
  `)

}

  
})