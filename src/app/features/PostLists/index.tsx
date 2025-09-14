import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import React, { useCallback } from 'react'
import { PostItem } from '../../entities'

const PostLists = ({ data, refreshing, onRefresh }) => {
	const renderItem = ({ item, index }) => {
		return <PostItem item={item} />
	}
	const keyExtractor = useCallback(
		(item, index) => item?._id || index?.toString(),
		[]
	)
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#eee',
			}}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				refreshing={refreshing}
				contentContainerStyle={{
					paddingBottom: 150,
				}}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						tintColor="#ff0000" // Red tint color
					/>
				}
			/>
		</View>
	)
}

export default PostLists
