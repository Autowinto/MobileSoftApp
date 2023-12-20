import { ImageBackground, View } from "react-native"
import styles from "../styles"
import NavbarTop from "./NavbarTop"
import NavbarBot from "./NavbarBot"

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <NavbarTop />
      <ImageBackground
        source={require("../assets/login-bg.png")}
        style={styles.background}
      ></ImageBackground>
      <NavbarBot />
    </View>
  )
}
