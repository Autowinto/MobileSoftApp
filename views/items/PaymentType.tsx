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
import { Car } from "../../utils/data";

export default function PaymentType({ item }: any) {

  const { width } = useWindowDimensions();
  const paymentMethods = item[0]
  const carDetails:Car = item[1]
  return (
    <View style={[styles.paymentContainer, { width: width / 3.5, aspectRatio: 1 }]}>
      <View style={styles.inner}>
        <ImageBackground
          source={paymentMethods.image}
          style={styles.icon}
        ></ImageBackground>
        <View>
          <Text style={styles.title}>{paymentMethods.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: '400'}}>{carDetails.price_per_day}</Text> 
            <Text style={styles.title}>$/hour </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paymentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#865AFF",
    padding: 10
  },
  icon: {
    resizeMode: "contain",
    width: 37,
    height: 37,
    transform: [{ scale: 1 }]
  },
  inner: {
    width: '100%',
    gap: 5
  },
  title: {
    color: "#454545",
    fontSize: 12,
    textAlign: "left"
  }

})
