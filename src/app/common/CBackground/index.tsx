import React from 'react'
import { StyleSheet, View } from 'react-native'

const CBackground = ({ children }) => {
	return <View style={styles.container}>{children}</View>
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
})

export default CBackground
