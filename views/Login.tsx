import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  Pressable,
} from "react-native"
import { NavigationProp, ParamListBase } from "@react-navigation/native"
type Props = {
  navigation: NavigationProp<ParamListBase>
}

export default function Login({ navigation }: Props) {
  const onPress = () => {
    navigation.navigate("Details")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/login-bg.png")}
        style={styles.background}
      ></ImageBackground>
      <ImageBackground
        source={require("../assets/autorent-logo.png")}
        style={styles.icon}
      ></ImageBackground>
      <Text style={styles.title}>Autorent</Text>
      <View style={styles.desc}>
        <Text style={styles.descLabel}>Your preferred</Text>
        <Text style={styles.descLabel}>car rental</Text>
        <Text style={styles.descLabel}>expert</Text>
      </View>

      <Pressable style={styles.appleButton} onPress={onPress}>
        <View style={{ width: 20 }}>
          <ImageBackground
            style={styles.buttonIcon}
            source={require("../assets/apple.png")}
          ></ImageBackground>
        </View>
        <View style={{ width: 200 }}>
          <Text style={styles.buttonLabel}>Sign up with Apple ID</Text>
        </View>
      </Pressable>

      <Pressable style={styles.otherButton} onPress={onPress}>
        <View style={{ width: 20 }}>
          <ImageBackground
            style={styles.buttonIcon}
            source={require("../assets/keyhole.png")}
          ></ImageBackground>
        </View>
        <View style={{ width: 200 }}>
          <Text style={styles.buttonLabel}>Other sign up methods</Text>
        </View>
      </Pressable>

      <View style={styles.footer}>
        <Text style={{ color: "#8C8C8C" }}>Already have a user?</Text>
        <Pressable onPress={onPress}>
          <Text style={{ color: "#865AFF", fontWeight: "600" }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  icon: {
    resizeMode: "contain",
    width: 57,
    height: 57,
    marginBottom: 5,
  },
  title: {
    fontSize: 52,
    letterSpacing: 2,
    color: "#fff",
    marginBottom: 50,
  },
  desc: {
    marginBottom: 50,
  },
  descLabel: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  appleButton: {
    width: 300,
    height: 40,
    backgroundColor: "#865AFF",
    borderRadius: 100,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
  buttonLabel: {
    textAlign: "center",
    textAlignVertical: "center",
    height: 21,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  otherButton: {
    width: 300,
    height: 40,
    backgroundColor: "#1B1B1B",
    borderRadius: 100,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    gap: 10,
    flexDirection: "row",
  },
})
