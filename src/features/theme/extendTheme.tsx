import { extendTheme } from '@mui/joy/styles'

const theme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				background: {
					body: '#202D36',
					surface: '#2B3743',
					popup: '#2B3743',
				},
				neutral: {
					outlinedBorder: '#777777',
				},
				primary: {
					rgb: '255,255,255',
				},
			},
		},
		light: {
			palette: {
				background: {
					body: '#FEFEFE',
					popup: '#ffffff',
				},
				neutral: {
					outlinedBorder: '#C5C5C5',
				},
				primary: {
					rgb: '0,0,0',
				},
			},
		},
	},
})

export default theme
