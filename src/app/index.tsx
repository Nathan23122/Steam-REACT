import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
	return <View style={{
		flex: 1,
		display: "flex",
		justifyContent: "center", alignItems: "center"
	}}>
		<Text>
			Page d'accueil qui présente l'application avec une animation pour accéder aux catégories
		</Text>
		<Text>
			`/categories` affiche toutes les catégories
		</Text>
		<Text>
			`/categories/[category]` affiche tous les jeux d'une catégorie
		</Text>
		<Text>
			`/games/[game]` affiche un jeu particulier
		</Text>
	</View>
}
