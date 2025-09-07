import React from 'react'
import { StyleSheet, View } from 'react-native'
import Authenticate from './Authenticate'
import UnAuthenticate from './UnAuthenticate'

// swift  ios  ( objective-c) .swift
// kotlin android ( java) .kt
const App = () => {
	// google map
	// mapbox/
	// use authsystem
	//  push notification
	const isAuth = true
	return (
		<View style={styles.container}>
			{isAuth ? <Authenticate /> : <UnAuthenticate />}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
	},
})

export default App
