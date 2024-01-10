import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const Home = ({ navigation }) => {
	let [fontLoader] = useFonts({
		Montserrat_400Regular,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
	});
	if (!fontLoader) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Image source={require("../images/1.png")} style={styles.image} />
				<Text style={styles.title}>Maxx Scooter</Text>
				<Text style={styles.detail}>
					With an updated motor, and integrated anti-theft tech the maxx
					scooters are custom-tuned for the ultimate riding experience
				</Text>
				<TouchableOpacity
					style={styles.btn}
					// onPress={() => props.navigation.navigate("Details")}
					onPress={() => navigation.navigate("details")}
				>
					<Text style={styles.text}>Next</Text>
				</TouchableOpacity>
			</View>
		);
	}
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#121212",
	},
	img: {
		height: "50%",
		width: "90%",
		resizeMode: "contain",
	},
	title: {
		color: "#FFF",
		fontFamily: "Montserrat_700Bold",
		fontSize: 30,
		marginTop: 20,
	},
	detail: {
		color: "#FFF",
		fontFamily: "Montserrat_400Regular",
		fontSize: 18,
		textAlign: "center",
		paddingHorizontal: 20,
		lineHeight: 30,
		marginTop: 30,
	},
	btn: {
		marginTop: 80,
		backgroundColor: "#E2443B",
		paddingHorizontal: 140,
		paddingVertical: 10,
		borderRadius: 30,
	},

	text: {
		fontFamily: "Montserrat_600SemiBold",
		fontSize: 30,
		color: "#FFF",
	},
});
