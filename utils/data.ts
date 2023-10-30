import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios'

export async function getCarData() {
        const localData = await AsyncStorage.getItem('cars')
        if (!localData) await fetchCarData()

        return AsyncStorage.getItem('cars').then((res => JSON.parse(res as string)))
}

async function fetchCarData() {
    const request = await axios.get('https://car-rentals.ladegaardmoeller.dk/cars')
    await AsyncStorage.setItem('cars', JSON.stringify(request.data))
}