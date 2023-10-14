import { View, Text, StyleSheet, Button, Pressable } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Autorent</Text>
      <Text>... din foretrukne biludlejningsekspert</Text>
      <Text>Login Page</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text>Opret en bruger med Apple</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Details")}>
        <Text>Se andre oprettelsesmuligheder</Text>
      </Pressable>

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
  button: {
    backgroundColor: "purple",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
})
