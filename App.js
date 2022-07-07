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
	Platform, //? Aloow you to check the device paltform !
	Dimensions, //? Alow us to know the exact dimensions on the device screen !
} from 'react-native'

export default function App() {
	console.log(Dimensions.get('screen'))

	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello World!</Text>
			<Button
				style={{
					width: '50%',
				}}
				color="orange"
				title="Click me Alert!"
				onPress={() => {
					Alert.alert('My title', 'My message', [
						{
							text: 'Yes',
							onPress: () => {
								console.log('Yes')
							},
						},
						{
							text: 'No',
							onPress: () => {
								console.log('No')
							},
						},
					])
				}}
			/>
			<Button
				color="red"
				title="Click me Prompt!"
				onPress={() => {
					Alert.prompt('My title', 'My message', (text) => console.log(text)) //! Only in IOS !
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

//? Is NOT CSS - only inspierd by CSS !
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
