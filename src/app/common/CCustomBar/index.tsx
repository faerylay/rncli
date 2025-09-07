import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CCustomBar = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor="#fff" />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		backgroundColor: '#fff',
	},
})

export default CCustomBar
