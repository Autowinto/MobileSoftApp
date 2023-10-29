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
import Dots from "./Dots"

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
  return (
    <View style={{ height: styles.carListItem.height, marginBottom: 150}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
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
      <Dots/>
    </View>
  )
}

const clStyles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: "space-between",
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
    height: ,
    backgroundColor: "#865AFF",
    borderRadius: 100,
    marginHorizontal: 20,
    justifyContent: "center",    
    alignItems: 'center',
    flexDirection: 'row',
  },
})
