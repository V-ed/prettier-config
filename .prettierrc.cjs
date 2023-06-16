/** @type {import('prettier').Config} */
const defaultConfig = {
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	semi: true,
	endOfLine: 'lf',
	printWidth: 140,
	overrides: [
		{
			files: ['*.css', '*.scss'],
			options: {
				singleQuote: false,
			},
		},
	],
};

module.exports = defaultConfig;
