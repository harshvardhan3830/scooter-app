import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();
const screenOptions = {
	headerShown: false,
};

const Navigation = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions} initialRouteName="home">
			<Stack.Screen name="home" component={Home} />
			<Stack.Screen name="details" component={Details} />
		</Stack.Navigator>
	);
};

export default Navigation;
