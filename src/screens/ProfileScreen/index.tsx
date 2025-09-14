import { StyleSheet, View } from 'react-native'
import React from 'react'
import { UserLogoutBtn } from '../../app/components'

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<UserLogoutBtn />
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
export default ProfileScreen
