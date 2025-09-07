import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CompleteProfileScreen, PostDetailScreen } from './screens'
import UserBottomTabs from './UserBottomTabs'

const Stack = createNativeStackNavigator()

const Authenticate = () => {
	const isCompleteProfile = false

	const initialiRouteName = isCompleteProfile
		? 'CompleteProfileScreen'
		: 'UserBottomTabs'
	return (
		<Stack.Navigator
			initialRouteName={initialiRouteName}
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name="UserBottomTabs" component={UserBottomTabs} />
			<Stack.Screen name="CompleteProfileScreen" component={CompleteProfileScreen} />
			<Stack.Screen
				name="PostDetailScreen"
				component={PostDetailScreen}
			/>
		</Stack.Navigator>
	)
}

export default Authenticate
