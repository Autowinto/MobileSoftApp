import React from "react"
import { ImageBackground, View } from "react-native"

export default function NavbarBot() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ImageBackground
          source={require("../assets/add-circle.png")}
          style={styles.iconCircle}
        ></ImageBackground>
        <ImageBackground
          source={require("../assets/user.png")}
          style={styles.iconUser}
        ></ImageBackground>
      </View>
    </View>
  )
}

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    width: "100%",
    height: 57,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    width: 150,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#151515",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  iconMagnifer: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  iconCircle: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  iconUser: {
    resizeMode: "contain",
    width: 17,
    height: 23,
  },
})
