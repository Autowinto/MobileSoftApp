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
import Dots from "./Dots"
import { useState } from "react"
import NavbarBot from "./NavbarBot"

type CarListItemProps = {
  path: string
}

const CarListItem = () => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.carListItem}
      onPress={() => navigation.navigate("Details")}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("../assets/flatlist/car-front.png")}
      ></ImageBackground>
      <Text style={styles.carListItemName}>Aston Martin DB7</Text>
      <Text style={styles.carListItemPrice}>564 kr./day</Text>
    </Pressable>
  )
}

const CarListView = () => {
  //const [currentIndex, setCurrentIndex] = useState(0);
  //<Dots index={0} amountOfDots={5} />

  return (
    <View style={{flexDirection: 'column',  height: styles.carListItem.height * 1.2}}>
      <ScrollView style={{ }} showsHorizontalScrollIndicator={false} horizontal
      >
        <CarListItem />
        <CarListItem />
        <CarListItem />
        <CarListItem />
        <CarListItem />
      </ScrollView>
    </View>
  )
}

export default function CarList() {


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
      <Pressable style={clStyles.searchButton}>
        <Image style={styles.buttonIcon} source={require('../assets/search.png')}></Image>
        <Text style={styles.buttonLabel}>Search for cars</Text>
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
    backgroundColor: '#4F4F4F',
    gap: 15,
  },
  textView: {
    marginHorizontal: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  searchButton: {
    width: 200,
    height: 40,
    backgroundColor: "#865AFF",
    borderRadius: 100,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row',
  },
})
