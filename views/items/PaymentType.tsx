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
  
  export default function PaymentType({ item }: any) {
  
    const { width } = useWindowDimensions();
  
    return (
      <View style={[styles.carContainer, {width: width/3.5, aspectRatio: 1}]}>
        <ImageBackground
          source={item.image}
          style={styles.icon}
        ></ImageBackground>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    carContainer: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#865AFF",
    },
    icon: {
      resizeMode: "contain",
      width: 37,
      height: 37,
      transform: [{ scale: 1 }]
    },
  })
  