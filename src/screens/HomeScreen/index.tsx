import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CBackground, CCustomBar, CHeaderBar } from '../../app/common'
import { PostLists } from '../../app/features'
import { mockPosts } from '../../mockData/posts'

const HomeScreen = () => {
	const navigation = useNavigation<any>()
	const [loading, setLoading] = React.useState(false)

	return (
		<CBackground>
			<CCustomBar />
			<CHeaderBar detail={false} hLeftTitle={'RNCLI'} />
			<PostLists
				data={mockPosts}
				refreshing={loading}
				onRefresh={() => {
					setLoading(true)
					setTimeout(() => {
						setLoading(false)
					}, 2000)
				}}
			/>
			{/* 
			<TouchableOpacity
				activeOpacity={0.9}
				disabled={isLoading}
				style={styles.btn}
				onLongPress={() => {
					Alert.alert(
						'Are you sure?',
						'This action is irreversible',
						[
							{ text: 'Cancel', style: 'destructive' },
							{
								text: 'Yes',
								onPress: () => console.log('Yes Pressed'),
							},
							{
								text: 'No',
								onPress: () => console.log('No Pressed'),
								style: 'cancel',
							},
						],
						{ cancelable: true }
					)
				}}
				onPress={() => {
					navigation.navigate('PostDetailScreen', {
						postId: 'Coming from Home Screen',
					})
				}}>
				<Text style={styles.btnText}>post Detail screen</Text>
			</TouchableOpacity> */}
		</CBackground>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	btn: {
		paddingVertical: 6,
		paddingHorizontal: 18,
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		backgroundColor: 'skyblue',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: 'red',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	btnText: {
		color: 'red',
		fontWeight: '900',
	},
})
export default HomeScreen
