import React from 'react'
import { StyleSheet, View } from 'react-native'
import Authenticate from './Authenticate'
import UnAuthenticate from './UnAuthenticate'
import { useSelector } from 'react-redux'
import { RootState } from './stores/store'

// swift  ios  ( objective-c) .swift
// kotlin android ( java) .kt
const App = () => {
	const user = useSelector((state: RootState) => state.user)
	// google map
	// mapbox/
	// use authsystem
	//  push notification
	return (
		<View style={styles.container}>
			{user?.user ? <Authenticate /> : <UnAuthenticate />}
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
