import { httpService } from "./http.service"

const END_POINT = "stay"

const labels = [
  "Design",
  "Beach",
  "Amazing Pools",
  "Islands",
  "National Parks",
  "Cabins",
  "Camping",
  "Tiny Homes",
  "Lakefront",
  "Arctic",
  "Desert",
  "Surfing",
  "Mansions",
  "Skiing",
  "Historical homes",
  "Campers",
]

const amenities = [
  "TV",
  "Cable TV",
  "Internet",
  "Wifi",
  "Air conditioning",
  "Wheelchair accessible",
  "Pool",
  "Kitchen",
  "Free parking on premises",
  "Doorman",
  "Gym",
  "Elevator",
  "Hot tub",
  "Heating",
  "Family/kid friendly",
  "Suitable for events",
  "Washer",
  "Dryer",
  "Smoke detector",
  "Carbon monoxide detector",
  "First aid kit",
  "Safety card",
  "Fire extinguisher",
  "Essentials",
  "Shampoo",
  "24-hour check-in",
  "Hangers",
  "Hair dryer",
  "Iron",
  "Laptop friendly workspace",
  "Self check-in",
  "Building staff",
  "Private entrance",
  "Room-darkening shades",
  "Hot water",
  "Bed linens",
  "Extra pillows and blankets",
  "Ethernet connection",
  "Luggage dropoff allowed",
  "Long term stays allowed",
  "Ground floor access",
  "Wide hallway clearance",
  "Step-free access",
  "Wide doorway",
  "Flat path to front door",
  "Well-lit path to entrance",
  "Disabled parking spot",
  "Step-free access",
  "Wide doorway",
  "Wide clearance to bed",
  "Step-free access",
  "Wide doorway",
  "Step-free access",
  "Wide entryway",
  "Waterfront",
  "Beachfront",
]

const popDestinations = [
  {
    city: "Hong Kong",
    country: "China",
    img: require("../assets/img/countries/hongkong.jpg"),
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    img: require("../assets/img/countries/rio.jpg"),
  },
  {
    city: "Barcelona",
    country: "Spain",
    img: require("../assets/img/countries/barcelona.jpg"),
  },
  {
    city: "New York",
    country: "United States",
    img: require("../assets/img/countries/newyork.jpg"),
  },
]

export const stayService = {
  query,
  getById,
  getAmenities,
  getLabels,
  getPopDestinations,
  saveStay,
  deleteStay,
  getTopRated,
}
// QUERY you can pass as a filter {hostId,stayLocation,label,guestCount}
async function query(filterBy) {
  try {
    const stays = await httpService.get(END_POINT, filterBy)
    return stays
  } catch (error) {
    throw error.data
  }
}

function getAmenities() {
  return [...amenities]
}
function getLabels() {
  return [...labels]
}

async function getTopRated() {
  try {
    const stay1 = await getById("622f337b75c7d36e498aabbe")
    const stay2 = await getById("622f337c75c7d36e498aabd7")
    const stay3 = await getById("622f337a75c7d36e498aab00")
    const stay4 = await getById("622f337a75c7d36e498aab2c")
    return [stay1, stay2, stay3, stay4]
  } catch (error) {
    throw error
  }
}

function getPopDestinations() {
  return [...popDestinations]
}

async function getById(stayId) {
  try {
    const stay = await httpService.get(`${END_POINT}/${stayId}`)
    return stay
  } catch (error) {
    throw error.data
  }
}

async function deleteStay(stayId) {
  try {
    return await httpService.delete(`${END_POINT}/${stayId}`)
  } catch (error) {
    throw error.data
  }
}

// name
// summary
// houseRules
// propertyType
// roomType
// capacity
// bedrooms
// beds
// amenities
// address
// bathrooms
// price
// imgUrls
async function saveStay(stay) {
  if (!stay._id) {
    try {
      const newStay = await httpService.post(END_POINT, stay)
      return newStay
    } catch (error) {
      throw error.data
    }
  } else
    try {
      const updatedStay = await httpService.put(
        `${END_POINT}/${stay._id}`,
        stay
      )
      return updatedStay
    } catch (error) {
      throw error.data
    }
}
