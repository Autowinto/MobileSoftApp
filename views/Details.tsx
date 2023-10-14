import { View, Text, StyleSheet } from "react-native"

export default function Details() {
  return (
    <View style={styles.container}>
      <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"></img>
      <Text>Bilnavn</Text>
      <Text>fra 564 kr./dag</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
