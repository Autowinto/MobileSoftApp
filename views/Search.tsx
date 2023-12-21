import {
  ImageBackground,
  Pressable,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native"
import styles from "../styles"
import NavbarTop from "./NavbarTop"
import NavbarBot from "./NavbarBot"
import { useNavigation } from "@react-navigation/native"

const categories = ["Sedan", "SUV", "Compact"]

export default function Search() {
  const categoryListItems = categories.map((cat, idx) => {
    return <CategoryListItem name={cat} key={idx}></CategoryListItem>
  })
  return (
    <View style={{ ...styles.container }}>
      <NavbarTop />
      <ImageBackground
        source={require("../assets/login-bg.png")}
        style={styles.background}
      ></ImageBackground>
      <Text style={{ ...styles.descLabel, marginBottom: 25 }}>
        Filter Car Types
      </Text>
      <ScrollView
        style={{
          marginBottom: 150,
          marginTop: 10,
          width: "100%",
        }}
        showsHorizontalScrollIndicator={false}
      >
        {categoryListItems}
      </ScrollView>
      <NavbarBot />
    </View>
  )
}

interface CategoryListItemProps {
  name: string
}
function CategoryListItem(props: CategoryListItemProps) {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.categoryListItem}
      onPress={() => {
        navigation.navigate("SearchResults", {
          category: props.name,
        })
      }}
    >
      <Text style={styles.categoryListItemName}>{props.name}</Text>
    </Pressable>
  )
}
