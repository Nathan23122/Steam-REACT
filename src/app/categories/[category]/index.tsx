import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default () => {
	const { category } = useLocalSearchParams()

	return <View style={{
		flex: 1,
		display: "flex",
		justifyContent: "center", alignItems: "center"
	}}>
		<Text>Affiche tous les jeux de la catégory "{ category }"</Text>
	</View>
}
