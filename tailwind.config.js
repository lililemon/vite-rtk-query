const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
  corePlugins: {
    aspectRatio: false,
  },
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.neutral,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			magenta: {
				DEFAULT: '#F136F5',
				light: '#F45EF7',
				lighter: '#F786F9',
				lightest: '#FCD7FD',
				darkest: '#791B7B',
			},
			brand: {
				DEFAULT: '#F5367A',
				light: '#F76499',
				lighter: '#F988B1',
				lightest: '#FDD7E4',
				darkest: '#A72553',
			},
			ink: {
				DEFAULT: '#1C2027',
				light: '#494C52',
				lighter: '#77797D',
				dark: '#111317',
				darker: '#0B0D10',
				darkest: '#030304',
			},
			skyblue: {
				DEFAULT: '#36D3F5',
				light: '#64DDF7',
				lighter: '#88E5F9',
				lightest: '#D7F6FD',
				darkest: '#258FA7',
			},
			green: {
				DEFAULT: '#36F58B',
				light: '#5EF7A2',
				lighter: '#86F9B9',
				lightest: '#D7FDE8',
				darkest: '#1B7B46',
			},
			red: {
				DEFAULT: '#FF5247',
				light: '#FF6D6D',
				lighter: '#FF9898',
				lightest: '#FFE5E5',
				darkest: '#D3180C',
			},
      phthaloblue: {
				DEFAULT: '#3636F5',
				light: '#5E5EF7',
				lighter: '#8686F9',
				lightest: '#D7D7FD',
				darkest: '#1B1B7B',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
