import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Login from "./views/Login"
import Details from "./views/Details"
import CarList from "./views/CarList"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="CarList"
          component={CarList}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
