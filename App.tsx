import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Login from "./views/Login"
import Details from "./views/Details"
import CarList from "./views/CarList"
import UserProfile from "./views/UserProfile"
import SearchResults from "./views/SearchResults"
import { SafeAreaProvider } from "react-native-safe-area-context"

// Remove this for persistent data

import AsyncStorage from "@react-native-async-storage/async-storage"
import Search from "./views/Search"
AsyncStorage.clear()

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
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="SearchResults"
            component={SearchResults}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
