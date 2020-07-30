import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, TransactionScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="home-screen" headerMode="none">
        <Screen name="home-screen" component={HomeScreen} />
        <Screen name="transaction-screen" component={TransactionScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
