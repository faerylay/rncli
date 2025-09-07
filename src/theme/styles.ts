import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const SIZES = {
	width: width as number,
	height: height as number,
}
export const FONTS = {
	h1: {
		fontSize: 28,
		fontWeight: '700' as const,
	},
	h2: {
		fontSize: 20,
		fontWeight: '600' as const,
	},
	h3: {
		fontSize: 16,
		fontWeight: '500' as const,
	},
	h4: {
		fontSize: 14,
		fontWeight: '400' as const,
	},
	h5: {
		fontSize: 13,
		fontWeight: '400' as const,
	},
	h6: {
		fontSize: 12,
		fontWeight: '400' as const,
	},
}
