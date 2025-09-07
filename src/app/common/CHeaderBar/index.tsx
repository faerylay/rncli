import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CHeaderBar = ({ detail = true, hLeftTitle = '' }) => {
	const navigation = useNavigation<any>()

	return (
		<View style={styles.header}>
			{detail ? (
				<TouchableOpacity
					hitSlop={{
						top: 50,
						bottom: 0,
						left: 50,
						right: 50,
					}}
					style={styles.btn}
					onPress={() => {
						navigation.goBack()
					}}>
					<Text
						style={{
							fontSize: 12,
						}}>
						Back
					</Text>
				</TouchableOpacity>
			) : hLeftTitle ? (
				<Text>{hLeftTitle}</Text>
			) : null}
		</View>
	)
}
const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		justifyContent: 'center',
		paddingHorizontal: 12,
	},
	btn: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default CHeaderBar
