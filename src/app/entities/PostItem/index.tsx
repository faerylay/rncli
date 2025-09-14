import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CIconComp } from '../../components'

const PostItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					gap: 8,
				}}>
				<Image
					source={{ uri: item.user?.profileImage }}
					style={{ width: 40, height: 40, borderRadius: 100 }}
				/>
				<View
					style={{
						justifyContent: 'center',
					}}>
					<Text style={{}}>{item.user?.name}</Text>
					<Text style={{}}>{item.createdAt}</Text>
				</View>
			</View>
			<View>
				<Text style={{}}>{item.content}</Text>
			</View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ gap: 10 }}>
				{item.images?.map((image, index) => (
					<Image
						key={index}
						source={{ uri: image }}
						style={{ width: 200, height: 180, borderRadius: 4 }}
					/>
				))}
			</ScrollView>
			<View style={styles.footer}>
				<View style={styles.row}>
					<CIconComp
						type={'AntDesign'}
						name="like2"
						size={20}
						color="#333"
					/>
					<Text>{item.likes?.length || 0} Likes</Text>
				</View>
				<View style={styles.row}>
					<CIconComp
						type={'MaterialIcons'}
						name="comment"
						size={20}
						color="#333"
					/>
					<Text>{item.comments?.length || 0} Comments</Text>
				</View>
				<View style={styles.row}>
					<CIconComp
						type={'Entypo'}
						name="share"
						size={20}
						color="#333"
					/>
					<Text>{item.shares?.length || 0} Shares</Text>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		gap: 8,
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
})

export default PostItem
