import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { SIZES } from '../../../theme/styles'
const Carousels = () => {
	return (
		<ScrollView
			style={styles.subContainer}
			bounces={false}
			horizontal={true}
			pagingEnabled={true}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<Text style={[styles.text]}>asdfdsa</Text>
				</View>
			</View>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<Text style={[styles.text]}>asdfdsa</Text>
				</View>
			</View>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<Text style={[styles.text]}>asdfdsa</Text>
				</View>
			</View>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<Text style={[styles.text]}>asdfdsa</Text>
				</View>
			</View>

			<View style={{ flex: 1, backgroundColor: 'blue' }}></View>
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#222',
	},
	subContainer: { flex: 1, backgroundColor: '#fff' },
	cardContainer: {
		height: 300,
		width: SIZES.width,
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		flex: 1,
		backgroundColor: '#213047',
		borderWidth: 1,
		borderColor: '#ddd',
		width: SIZES.width - 40,
		borderRadius: 8,
	},
	text: {
		fontSize: 20,
		fontWeight: '600' as const,

		color: 'red',
	},
})

export default Carousels
