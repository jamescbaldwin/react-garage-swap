import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Home/HomeScreen";
import BuyerScreen from "./Buyer/BuyerScreen";
import SellerScreen from "./Seller/SellerScreen";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Seller" component={SellerScreen} />
        <Stack.Screen name="Buyer" component={BuyerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
