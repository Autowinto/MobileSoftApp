import { View, Text, StyleSheet, Pressable, FlatList, useWindowDimensions, Animated, ImageBackground } from "react-native"
import Navbar from "./Navbar"
import Dots from "./Dots"
import { useRef, useState } from "react"
import { CarSlides } from "../slides"
import CarItem from "./items/CarItem"
import { Image } from "react-native"
const CarListItem = () => (
  <Pressable style={styles.carItem}>
    <Text>Car</Text>
  </Pressable>
)

export default function Details() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.carList}>
        <FlatList
          data={CarSlides.Mercedes_G.items}
          renderItem={({ item }) => <CarItem item={item}></CarItem>}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <Dots index={currentIndex} amountOfDots={Object.keys(CarSlides.Mercedes_G.items).length} />

      <View style={styles.carDetailsContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{CarSlides.Mercedes_G.name.replaceAll('_', ' ')}</Text>
          <Text style={styles.price}>From <Text style={styles.innerStyle}>{CarSlides.Mercedes_G.price}</Text>{CarSlides.Mercedes_G.currency} / day </Text>
        </View>
        <View style={styles.detailsSection}>
          <View style={styles.section}>
            <View style={styles.itemWrapper}>
              <Image style={styles.icon} source={require('../assets/details/location.png')}></Image>
              <View>
                <Text style={{ color: "#454545" }}>Location</Text>
                <Text style={{ color: "#fff" }}>{CarSlides.Mercedes_G.location}</Text>
              </View>
            </View>

            <View style={styles.itemWrapper}>
              <Image style={styles.icon} source={require('../assets/details/stopwatch.png')}></Image>
              <View>
                <Text style={{ color: "#454545" }}>0-100</Text>
                <Text style={{ color: "#fff" }}>{CarSlides.Mercedes_G.time_to_100} seconds</Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>

            <View style={styles.itemWrapper}>
              <Image style={styles.icon} source={require('../assets/details/speedometer.png')}></Image>
              <View>
                <Text style={{ color: "#454545" }}>Top speed</Text>
                <Text style={{ color: "#fff" }}>{CarSlides.Mercedes_G.top_speed} MPH</Text>
              </View>
            </View>

            <View style={styles.itemWrapper}>
              <Image style={styles.icon} source={require('../assets/details/vehicle-type.png')}></Image>
              <View>
                <Text style={{ color: "#454545" }}>Vehicle Type</Text>
                <Text style={{ color: "#fff" }}>{CarSlides.Mercedes_G.vehicle_type}</Text>
              </View>
            </View>

          </View>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    flexDirection: "column",
  },
  carItem: {
    width: 150,
    marginEnd: 10,
    height: 150,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  carList: {
    width: "100%",
    height: 150,
    marginTop: 10,
    marginBottom: 5,
  },
  scene: {
    flex: 1
  },

  carDetailsContainer: {
    width: "100%",
    height: 300,
    padding: 30,
    bottom: 0,
  },
  topContainer: {
    flexDirection: "column",
    gap: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  price: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
  },
  innerStyle: {
    color: "#865AFF",
  },

  detailsSection: {
    flexDirection: "column",
    gap: 10,
  },

  section: {
    flexDirection: "row",
    gap: 10,
  },

  itemWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    width: "50%",
    height: 75,
    borderRadius: 10,
  },

  icon: {
    width: 27,
    aspectRatio: 1,
    resizeMode: 'contain'
  }


})
