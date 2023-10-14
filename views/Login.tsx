import { View, Text, StyleSheet, Button } from "react-native"

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button title="Press" onPress={() => navigation.navigate("Details")} />
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
