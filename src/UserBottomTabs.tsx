import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	HomeScreen,
	NotificationTabScreen,
	ProfileScreen,
	StoryTabScreen,
} from './screens'
import { CIconComp } from './app/components'

const Tab = createBottomTabNavigator()
const UserBottomTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeTab"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'blue',
				tabBarInactiveTintColor: 'gray',
			}}>
			<Tab.Screen
				name={'HomeTab'}
				options={{
					tabBarLabel: 'Feed',
					tabBarIcon: ({ focused, color }) => (
						<CIconComp
							type={'FontAwesome'}
							name={'home'}
							size={20}
							color={color}
						/>
					),
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				name={'StoryTab'}
				options={{
					tabBarLabel: 'Story',
					tabBarIcon: ({ focused, color }) => (
						<CIconComp
							type={'MaterialIcons'}
							name={'feed'}
							size={20}
							color={color}
						/>
					),
				}}
				component={StoryTabScreen}
			/>
			<Tab.Screen
				name={'NotificationTab'}
				options={{
					tabBarLabel: 'Notification',
					tabBarIcon: ({ focused, color }) => (
						<CIconComp
							type={'FontAwesome'}
							name={'bell'}
							size={20}
							color={color}
						/>
					),
				}}
				component={NotificationTabScreen}
			/>
			<Tab.Screen
				name={'ProfileTab'}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ focused, color }) => (
						<CIconComp
							type={'FontAwesome'}
							name={'user-circle-o'}
							size={20}
							color={color}
						/>
					),
				}}
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	)
}

export default UserBottomTabs
