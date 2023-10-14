import { View, Text, StyleSheet, Button } from "react-native"

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Autorent</Text>
      <Text>... din foretrukne biludlejningsekspert</Text>
      <Text>Login Page</Text>
      <Button
        title="Opret en bruger med Apple"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Andre oprettelsesmuligheder"
        onPress={() => navigation.navigate("Details")}
      />

      <Text>Har du allerede en bruger?</Text>
      <a>Login her</a>
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
