import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  FlatList,
} from "react-native"
import styles from "../styles"
import NavbarTop from "./NavbarTop"
import NavbarBot from "./NavbarBot"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Car, getCarData } from "../utils/data"
import { CarListItem } from "./items/CarListItem"

export default function SearchResults({ route }: any) {
  const navigation = useNavigation()
  const { category } = route.params

  const [carList, setCarList] = useState<Car[]>([])
  useEffect(() => {
    getCarData().then((res) => {
      setCarList(res.filter((e) => e.car_type == category))
    })
  })

  const listings = carList.map((car: Car, index) => {
    return
  })

  return (
    <View style={{ ...styles.container, width: "100%" }}>
      <NavbarTop />
      <Text style={styles.descLabel}>{category}s</Text>
      <ImageBackground
        source={require("../assets/login-bg.png")}
        style={styles.background}
      ></ImageBackground>
      <ScrollView
        style={{
          width: "100%",
          // flex: 1,
          // flexDirection: "row",
          // flexWrap: "wrap",
        }}
      >
        <FlatList
          key={"flatlistkey"}
          data={carList}
          renderItem={(item) => {
            return (
              <CarListItem car={item.item} index={item.index}></CarListItem>
            )
          }}
          numColumns={2}
        ></FlatList>
      </ScrollView>
      <NavbarBot />
    </View>
  )
}

const rStyles = StyleSheet.create({})
