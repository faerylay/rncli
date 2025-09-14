import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../stores/Slices/usersSlice'

const UserLogoutBtn = () => {
	const dispatch = useDispatch()
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			hitSlop={{
				top: 10,
				bottom: 10,
				left: 10,
				right: 10,
			}}
			style={{
				paddingVertical: 8,
				paddingHorizontal: 16,
				borderRadius: 4,
				backgroundColor: 'red',
			}}
			onPress={() => {
				dispatch(logoutUser())
			}}>
			<Text
				style={{
					color: 'white',
					fontWeight: '500',
				}}>
				Logout
			</Text>
		</TouchableOpacity>
	)
}

export default UserLogoutBtn
