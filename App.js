import { StatusBar } from 'expo-status-bar'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	SafeAreaView,
	Image,
	Button,
	Alert,
} from 'react-native'

export default function App() {
	let x = 1
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello World!</Text>
			<Button
				color="orange"
				title="Click me !"
				onPress={() => {
					Alert.alert('My title', 'My message', [
						{ text: 'Yes' },
						{ text: 'No' },
					])
				}}
			/>
			<TouchableHighlight
				onPress={() => {
					console.log('Touch!')
				}}
			>
				<Image
					fadeDuration={2000} //!Only in andoid !
					source={{
						width: 200,
						height: 300,
						uri: 'https://picsum.photos/200/300',
					}}
				></Image>
			</TouchableHighlight>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
