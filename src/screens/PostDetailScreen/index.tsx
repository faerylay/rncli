import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CCustomBar, CHeaderBar } from '../../app/common'
const PostDetailScreen = ({ route }) => {
	const postId = route?.params?.postId
	return (
		<View style={styles.container}>
			<CCustomBar />
			<CHeaderBar />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
export default PostDetailScreen
