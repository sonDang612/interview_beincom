import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import "react-native-gesture-handler";
import routes from "~/screens/routes";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(route => (
          <Stack.Screen key={route.name} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
