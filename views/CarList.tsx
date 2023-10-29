import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from "react-native"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"

type Props = {
  carDetails: any
  navigation?: NavigationProp<ParamListBase>
}

const CarListItem = ({ navigation, carDetails }: Props) => {
  if (navigation)
  return (
    <Pressable
      style={styles.carItem}
      onPress={() => navigation.navigate('Details', {
        carDetails: carDetails
      })}
    >
      <Text>Car</Text>
    </Pressable>
  )
}

const CarListView = () => {
  const carDetails = { itemName: "Audi A4" };

  return (
    <ScrollView
      style={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <CarListItem carDetails={carDetails} />
      <CarListItem carDetails={carDetails} />
      <CarListItem carDetails={carDetails} />
      <CarListItem carDetails={carDetails} />
      <CarListItem carDetails={carDetails} />
    </ScrollView>
  )
}

export default function CarList() {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: "center" }}>CarList Page</Text>
      <Button title="Søg efter biler"></Button>
      <CarListView></CarListView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  carItem: {
    width: 150,
    marginEnd: 10,
    height: 150,
    borderRadius: 10,
    backgroundColor: "gray",
  },
})
