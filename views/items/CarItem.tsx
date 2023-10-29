import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
  ImageBackground,
  useWindowDimensions,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function CarItem({ item }: any) {

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.carContainer, {width}]}>
      <ImageBackground
        source={item.image}
        style={styles.carImage}
      ></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  carContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  carImage: {
    resizeMode: "contain",
    width: 350,
    height: 180,
    transform: [{ scale: 1 }]
  },
})
