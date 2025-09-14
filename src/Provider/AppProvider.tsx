import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import App from '../index'
import { store } from '../stores'
const AppProvider = () => {
	return (
		<SafeAreaProvider>
			<ReduxProvider store={store}>
				<NavigationContainer>
					<App />
				</NavigationContainer>
			</ReduxProvider>
		</SafeAreaProvider>
	)
}
// redux ,redux-toolkit , redux-persist , storage
export default AppProvider
