import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.loginCon}>
				<Text style={styles.loginText}>Login</Text>
			</View>
			<View style={styles.inputCon}>
				<TextInput
					placeholderTextColor="#aaaaa"
					style={styles.inputtext}
					placeholder="Unsername"
				/>
				<TextInput
					style={styles.inputtext}
					placeholder="Password"
					placeholderTextColor="#aaaaa"
				/>
				<Text style={styles.forgotText}>forgot password</Text>
			</View>
			<View>
				<TouchableOpacity style={styles.click}>
					<Text style={styles.clickme}>Log in</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.signup}>
				<Text>Don't have an account? </Text>
				<Text style={{ color: "#6e0cc4" }}>Sign up</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 40,
		// backgroundColor: "#fff",
		// alignItems: "center",
		// justifyContent: "center",
	},
	loginCon: {
		marginTop: 90,
	},
	loginText: {
		fontSize: 40,
		color: "#6e0cc4",
	},
	inputCon: {
		marginVertical: 30,
	},
	inputtext: {
		marginVertical: 30,
		borderColor: "#6e0cc4",
		borderBottomWidth: 3,
		fontSize: 30,
	},
	click: {
		borderRadius: 20,
		backgroundColor: "#6e0cc4",
		height: 70,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 50,
	},
	clickme: {
		color: "#fff",
		fontSize: 30,
		alignSelf: "center",
	},
	signup: {
		marginTop: 60,
		flexDirection: "row",
		justifyContent: "center",
		fontSize: 30,
	},
	forgotText: {
		alignSelf: "flex-end",
		color: "dodgerblue",
	},
});
