import {
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native"
import { NavigationProp, ParamListBase } from "@react-navigation/native"
import styles from "../styles"

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
        </View>1
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
