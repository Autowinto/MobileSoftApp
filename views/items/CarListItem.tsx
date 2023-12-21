import { useNavigation } from "@react-navigation/native"
import { ImageBackground, Text, Pressable } from "react-native"
import styles from "../../styles"
import { Car } from "../../utils/data"

export type CarListItemProps = {
  index: number
  car: Car
}
export const CarListItem = (props: CarListItemProps) => {
  const navigation = useNavigation()
  return (
    <Pressable
      disabled={!props.car.available}
      style={
        props.car.available ? styles.carListItem : styles.carListItemUnavailable
      }
      onPress={() => navigation.navigate("Details", { id: props.index })}
    >
      <ImageBackground
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("../../assets/flatlist/car-front.png")}
      ></ImageBackground>
      <Text style={styles.carListItemName}>
        {props.car.make} {props.car.model}
      </Text>
      <Text style={styles.carListItemPrice}>
        {props.car.price_per_day}kr./day
      </Text>
    </Pressable>
  )
}
