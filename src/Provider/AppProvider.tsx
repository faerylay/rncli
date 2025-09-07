import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import App from '../index'
const AppProvider = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<App />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default AppProvider
