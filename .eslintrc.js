const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
	root: true,
	extends: ['@react-native', 'react-app', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		rules: {
			'no-unused-vars': 'on',
			'@typescript-eslint/no-unused-vars': ['error'],
			'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
			'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		},
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: { 'prettier/prettier': ['warn', prettierOptions] },
		},
	],
}
