import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"

const CarListItem = () => (
  <Pressable style={styles.carItem}>
    <Text>Car</Text>
  </Pressable>
)

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }}>Details Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  carItem: {
    width: 150,
    marginEnd: 10,
    height: 150,
    borderRadius: 10,
    backgroundColor: "gray",
  },
})
