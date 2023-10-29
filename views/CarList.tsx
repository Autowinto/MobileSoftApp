import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import Navbar from "./Navbar"
import styles from "../styles"

type CarListItemProps = {
  path: string
}

const CarListItem = () => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.carItem}
      onPress={() => navigation.navigate("Details")}
    >
      <Image source={require('../assets/flatlist/car-front.jpg')}></Image>
    </Pressable>
  )
}

const CarListView = () => {
  return (
    <ScrollView
      style={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <CarListItem />
      <CarListItem />
      <CarListItem />
      <CarListItem />
      <CarListItem />
    </ScrollView>
  )
}

export default function CarList() {
  return (
    <View style={clStyles.container}>
      <ImageBackground
        source={require("../assets/login-bg.png")}
        style={styles.background}
      ></ImageBackground>
      <Navbar />
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
      <Pressable style={styles.searchButton}>
        <Text style={styles.buttonLabel}>Search for cars</Text>
      </Pressable>
      <CarListView></CarListView>
    </View>
  )
}

const clStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#543",
    // alignItems: "center",
    justifyContent: "center",
  },
})
