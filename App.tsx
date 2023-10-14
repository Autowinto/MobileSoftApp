import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Login from "./views/Login"
import Details from "./views/Details"
import CarList from "./views/CarList"
import { SafeAreaProvider } from "react-native-safe-area-context"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
    </SafeAreaProvider>
  )
}
