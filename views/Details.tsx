import { View, Text, StyleSheet, Pressable, FlatList, useWindowDimensions, Animated } from "react-native"
import Navbar from "./Navbar"
import Dots from "./Dots"
import { useRef, useState } from "react"
import { CarSlides } from "../slides"
import CarItem from "./items/CarItem"

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
          data={CarSlides}
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
      <Dots index={currentIndex}/>

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
    marginBottom: 10,
  },
  scene: {
    flex: 1
  }
})
