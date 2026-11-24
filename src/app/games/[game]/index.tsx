import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default () => {
	const { game } = useLocalSearchParams()

	return <View style={{
		flex: 1,
		display: "flex",
		justifyContent: "center", alignItems: "center"
	}}>
		<Text>La page du jeu { game }</Text>
	</View>
}
