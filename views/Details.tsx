import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  useWindowDimensions,
  Animated,
  ImageBackground,
  ScrollView,
} from "react-native"
import Navbar from "./Navbar"
import Dots from "./Dots"
import React, { useEffect, useRef, useState } from "react"
import { CarSlides } from "../slides"
import CarItem from "./items/CarItem"
import { Image } from "react-native"
import NavbarBot from "./NavbarBot"
import paymentMethods from "../paymentMethods"
import PaymentType from "./items/PaymentType"
import NavbarTop from "./NavbarTop"
import { Car, getCarData, updateCar } from "../utils/data"
const CarListItem = () => (
  <Pressable style={styles.carItem}>
    <Text>Car</Text>
  </Pressable>
)

export default function Details({ route }) {
  const { id } = route.params
  useEffect(() => {
    console.log(route)
    console.log(id)
    const fetchData = async () => {
      await getCarData().then((res) => {
        setCar(res[id])
      })
    }
    fetchData()
  }, [])

  const [car, setCar] = useState<Car>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const [open, setOpen] = useState(false)
  const scrollX = useRef(new Animated.Value(0)).current
  const { width } = useWindowDimensions()
  const slidesRef = useRef(null)
  const slidesRef2 = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewableItemsChanged2 = useRef(({ viewableItems }: any) => {
    setCurrentIndex2(viewableItems[0].index)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <View style={styles.container}>
      <NavbarTop />
      <View style={styles.carList}>
        <FlatList
          data={CarSlides.Mercedes_G.items}
          renderItem={({ item }) => <CarItem item={item}></CarItem>}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <Dots
        index={currentIndex}
        amountOfDots={Object.keys(CarSlides.Mercedes_G.items).length}
      />

      {open ? (
        <View
          style={[
            {
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginLeft: 50,
              marginBottom: 20,
              marginTop: 20,
              gap: 10,
              alignItems: "center",
            },
          ]}
        >
          <Image
            style={styles.icon}
            source={require("../assets/details/location.png")}
          ></Image>
          <Text style={{ color: "#fff" }}>{CarSlides.Mercedes_G.location}</Text>
        </View>
      ) : null}
      <View
        style={[
          styles.carDetailsContainer,
          { display: open ? "none" : "flex", marginBottom: 75 },
        ]}
      >
        <View style={styles.topContainer}>
          <Text style={styles.title}>
            {CarSlides.Mercedes_G.name.replaceAll("_", " ")}
          </Text>
          <Text style={styles.price}>
            From{" "}
            <Text style={styles.innerStyle}>{CarSlides.Mercedes_G.price}</Text>
            {CarSlides.Mercedes_G.currency} / day{" "}
          </Text>
        </View>
        <View style={styles.detailsSection}>
          <View style={styles.section}>
            <View style={styles.itemWrapper}>
              <Image
                style={styles.icon}
                source={require("../assets/details/location.png")}
              ></Image>
              <View>
                <Text style={{ color: "#454545" }}>Location</Text>
                <Text style={{ color: "#fff" }}>
                  {CarSlides.Mercedes_G.location}
                </Text>
              </View>
            </View>

            <View style={styles.itemWrapper}>
              <Image
                style={styles.icon}
                source={require("../assets/details/stopwatch.png")}
              ></Image>
              <View>
                <Text style={{ color: "#454545" }}>0-100</Text>
                <Text style={{ color: "#fff" }}>
                  {CarSlides.Mercedes_G.time_to_100} seconds
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.itemWrapper}>
              <Image
                style={styles.icon}
                source={require("../assets/details/speedometer.png")}
              ></Image>
              <View>
                <Text style={{ color: "#454545" }}>Top speed</Text>
                <Text style={{ color: "#fff" }}>
                  {CarSlides.Mercedes_G.top_speed} MPH
                </Text>
              </View>
            </View>

            <View style={styles.itemWrapper}>
              <Image
                style={styles.icon}
                source={require("../assets/details/vehicle-type.png")}
              ></Image>
              <View>
                <Text style={{ color: "#454545" }}>Vehicle Type</Text>
                <Text style={{ color: "#fff" }}>
                  {CarSlides.Mercedes_G.vehicle_type}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          onTouchStart={() => {
            setOpen(open ? false : true)
          }}
        >
          <View
            style={{
              width: 36,
              height: 6,
              backgroundColor: "#4F4F4F",
              borderRadius: 10,
              marginBottom: 20,
            }}
          ></View>
        </View>
        <View
          style={{
            width: "90%",
            height: 50,
            opacity: open ? 1 : 0.15,
            overflow: "hidden",
          }}
          onTouchStart={() => {
            setOpen(open ? false : true)
          }}
        >
          <Text style={{ color: "#fff", fontSize: 25 }}>Choose your plan</Text>
        </View>

        <View style={[styles.paymentList, { opacity: open ? 1 : 0.15 }]}>
          <FlatList
            data={paymentMethods}
            renderItem={({ item }) => (
              <PaymentType item={[item, CarSlides.Mercedes_G]} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            viewabilityConfig={viewConfig}
            onViewableItemsChanged={viewableItemsChanged2}
            scrollEventThrottle={16}
            ItemSeparatorComponent={() => <View style={{ width: 45 }} />}
            ref={slidesRef2}
            snapToAlignment="center"
            snapToOffsets={paymentMethods.map(
              (_, index) => index * (width / 3.5 + 45)
            )}
            contentContainerStyle={{
              paddingHorizontal: width / 1.75 - (width / 3.5 + 45) / 2,
            }}
          />
        </View>

        <View
          style={{
            maxHeight: 42,
            width: "100%",
            paddingRight: 15,
            paddingLeft: 15,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              aspectRatio: 1,
              width: 42,
              borderRadius: 100,
              backgroundColor: "#151515",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageBackground
              source={require("../assets/arrow-right.png")}
              style={{ aspectRatio: 1, width: 21 }}
            ></ImageBackground>
          </View>
          <Pressable
            onPress={() => {
              if (!car) {
                console.error("NO CAR DEFINED")
                return
              }
              car.available = false
              updateCar(id, car)
            }}
            style={{
              width: 286,
              height: 42,
              backgroundColor: "#865AFF",
              borderRadius: 25,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Rent car now</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                height: 42,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 14 }}>
                {CarSlides.Mercedes_G.price} {CarSlides.Mercedes_G.currency} /
                hour
              </Text>

              <ImageBackground
                source={require("../assets/check-circle.png")}
                style={{ aspectRatio: 1, width: 21 }}
              ></ImageBackground>
            </View>
          </Pressable>
        </View>
      </View>

      <NavbarBot />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    flexDirection: "column",
    height: "100%",
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
    flex: 1,
  },

  carDetailsContainer: {
    width: "100%",
    height: 300,
    padding: 30,
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
    resizeMode: "contain",
  },

  rentalDetails: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 100,
    overflow: "hidden",
  },

  paymentList: {
    width: "100%",
    height: 200,
  },
})
