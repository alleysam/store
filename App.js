import React from "react-native";
import { Text, View } from 'react-native';


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//Pages
import Details from "./src/pages/Details/Details";
import Produtcs from "./src/pages/Produtcs/Produtcs";

const Stack = createNativeStackNavigator();

const  App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produtcs" component={Produtcs}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
