import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../../stores/Slices/usersSlice'
import { nanoid } from '@reduxjs/toolkit'
const LoginScreen = () => {
	const dispatch = useDispatch()
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [error, setError] = useState<string>('')

	const handleLogin = async () => {
		setError('')
		if (email === '' || password === '') {
			setError('All fields are required')
			return
		}
		if (error) {
			return
		}
		dispatch(
			setUserData({
				_id: nanoid(),
				email: email?.toLocaleLowerCase?.(),
				password: password,
				name: email.split('@')[0],
			})
		)
	}
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 24,
					fontWeight: '600',
					letterSpacing: 1,
				}}>
				Login
			</Text>
			{/* email,password , button */}
			<View
				style={{
					width: '80%',
					gap: 12,
				}}>
				<TextInput
					value={email}
					placeholder="Add email"
					placeholderTextColor={'gray'}
					onChangeText={e => {
						if (e.includes('@')) {
							setError('Enter valid email')
						}
						setEmail(e)
					}}
					style={{
						width: '100%',
						height: 45,
						backgroundColor: '#f1f1f1',
						borderWidth: 1,
						borderColor: '#aaa',
						paddingHorizontal: 12,
						borderRadius: 8,
					}}
				/>
				<TextInput
					value={password}
					placeholder={'Add password'}
					placeholderTextColor={'gray'}
					onChangeText={e => {
						setPassword(e)
					}}
					style={{
						width: '100%',
						height: 45,
						backgroundColor: '#f1f1f1',
						borderWidth: 1,
						borderColor: '#aaa',
						paddingHorizontal: 12,
						borderRadius: 8,
					}}
				/>
				{error ? (
					<Text
						style={{
							fontSize: 14,
							letterSpacing: 1,
							color: 'red',
						}}>
						{error}
					</Text>
				) : null}
				<TouchableOpacity style={styles.btn} onPress={handleLogin}>
					<Text
						style={{
							color: '#fff',
							fontWeight: '600',
						}}>
						Login
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
	},
	btn: {
		width: '100%',
		height: 45,
		backgroundColor: 'dodgerblue',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
export default LoginScreen
