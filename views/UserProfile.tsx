import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native"
import styles from "../styles"
import NavbarTop from "./NavbarTop"
import NavbarBot from "./NavbarBot"
import { SafeAreaView } from "react-native-safe-area-context"
import { useEffect, useState } from "react"
import { Car, getCarData } from "../utils/data"
import { CarListItem } from "./items/CarListItem"

export default function UserProfile() {
  return (
    <View style={{ ...styles.container, width: "100%" }}>
      <NavbarTop />
      <ImageBackground
        source={require("../assets/login-bg.png")}
        style={styles.background}
      ></ImageBackground>
      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        <UserInfo />
        <ActiveRents />
      </ScrollView>
      <NavbarBot />
    </View>
  )
}

function UserInfo() {
  return (
    <View>
      <View style={{ ...uStyles.card, flexDirection: "row" }}>
        <Image
          style={uStyles.profileimage}
          source={require("../assets/profile.jpg")}
        ></Image>
        <View>
          <Text style={styles.cardText}>John Smith</Text>
          <Text style={styles.cardText}>47 Years Old</Text>
        </View>
      </View>
    </View>
  )
}

function ActiveRents() {
  const [carList, setCarList] = useState<Car[]>([])
  useEffect(() => {
    getCarData().then((res) => {
      setCarList(res.filter((e) => !e.available))
    })
  })
  const rents = carList.map((car, index) => (
    <CarListItem car={car} index={index} key={index} />
  ))
  return (
    <View style={uStyles.card}>
      <Text style={styles.cardTitle}>Active Rents</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {rents}
      </ScrollView>
    </View>
  )
}

const uStyles = StyleSheet.create({
  card: {
    margin: 10,
    width: "95%",
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#111111",
  },
  profileimage: {
    width: "40%",
    aspectRatio: 1,
    marginEnd: 30,
    borderRadius: 150,
  },
})
