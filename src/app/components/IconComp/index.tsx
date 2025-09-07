import { Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import Foundation from 'react-native-vector-icons/Foundation'
import Fontisto from 'react-native-vector-icons/Fontisto'

const ICON_LIBRARIES: Record<string, any> = {
	FontAwesome,
	FontAwesome5,
	MaterialIcons,
	Ionicons,
	Entypo,
	AntDesign,
	Feather,
	MaterialCommunityIcons,
	Octicons,
	SimpleLineIcons,
	EvilIcons,
	Zocial,
	Foundation,
	Fontisto,
}

interface IconCompProps {
	type: keyof typeof ICON_LIBRARIES
	name: string
	color?: string
	size?: number
	style?: any
}

const CIconComp = ({ type, name, color, size = 20, style }: IconCompProps) => {
	const IconLibary = ICON_LIBRARIES[type]

	if (!IconLibary) {
		return (
			<Text
				style={{
					fontSize: 20,
					color: 'red',
					fontWeight: '500',
				}}>
				!
			</Text>
		)
	}
	return (
		<IconLibary
			name={name}
			size={size}
			color={color || 'black'}
			style={style}
		/>
	)
}

export default CIconComp
