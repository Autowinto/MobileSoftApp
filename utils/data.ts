import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

export interface Car {
  make: string
  model: string
  year: number
  car_type: string
  price_per_day: number
  location: string
  available: boolean
}

export async function getCarData(): Promise<Car[]> {
  const localData = await AsyncStorage.getItem("cars")
  if (!localData) await fetchCarData()

  return AsyncStorage.getItem("cars").then((res) => JSON.parse(res as string))
}

export async function updateCar(index: number, car: Car) {
  let data = await getCarData()
  data[index] = car
  AsyncStorage.setItem("cars", JSON.stringify(data))
}

async function fetchCarData() {
  const request = await axios.get(
    "https://car-rentals.ladegaardmoeller.dk/cars"
  )
  await AsyncStorage.setItem("cars", JSON.stringify(request.data))
}
