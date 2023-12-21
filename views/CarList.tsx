import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  FlatList,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Navbar from "./Navbar"
import styles from "../styles"
import { useEffect, useState } from "react"
import { Car, getCarData } from "../utils/data"
import NavbarBot from "./NavbarBot"
import { CarListItem } from "./items/CarListItem"

const CarListView = () => {
  const [carList, setCarList] = useState<Car[]>([])
  useEffect(() => {
    getCarData().then((res) => setCarList(res))
  })
  const carListItems = carList.map((car, index) => (
    <CarListItem car={car} index={index} key={index} />
  ))
  return (
    <View
      style={{
        flexDirection: "column",
        height: styles.carListItem.height * 1.2,
        marginBottom: 150,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {carListItems}
      </ScrollView>
    </View>
  )
}

export default function CarList() {
  const navigation = useNavigation()
  return (
    <View style={{ ...clStyles.container }}>
      <ImageBackground
        source={require("../assets/login-bg.png")}
        style={StyleSheet.absoluteFillObject}
      ></ImageBackground>
      <Navbar />
      <View style={clStyles.textView}>
        <Text>
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "#865AFF" }}>
            Autorent
          </Text>
          <Text style={styles.descLabel}>, Your</Text>
        </Text>
        <Text style={{ ...styles.descLabel, textAlign: "left" }}>
          preferred car
        </Text>
        <Text style={{ ...styles.descLabel, textAlign: "left" }}>
          rental expert
        </Text>
      </View>
      <Pressable
        style={clStyles.searchButton}
        onPress={() => {
          navigation.navigate("Search")
        }}
      >
        <Image
          style={styles.buttonIcon}
          source={require("../assets/search.png")}
        ></Image>
        <Text style={styles.buttonLabel}>Search</Text>
      </Pressable>

      <CarListView />
      <NavbarBot />
    </View>
  )
}

const clStyles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: "#4F4F4F",
    gap: 15,
  },
  textView: {
    marginHorizontal: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  searchButton: {
    width: 200,
    height: 40,
    backgroundColor: "#865AFF",
    borderRadius: 100,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
})
