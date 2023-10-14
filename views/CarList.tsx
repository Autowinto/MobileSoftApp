import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

const CarListItem = () => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.carItem}
      onPress={() => navigation.navigate("Details")}
    >
      <Text>Car</Text>
    </Pressable>
  )
}

const CarListView = () => {
  return (
    <ScrollView
      style={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <CarListItem />
      <CarListItem />
      <CarListItem />
      <CarListItem />
      <CarListItem />
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
