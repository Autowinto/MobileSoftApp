import { View, Text, StyleSheet } from "react-native"

export default function CarList() {
  return (
    <View style={styles.container}>
      <Text>CarList Page</Text>
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
