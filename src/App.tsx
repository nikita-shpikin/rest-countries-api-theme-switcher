import { CssBaseline, CssVarsProvider } from '@mui/joy'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import theme from './features/theme/extendTheme'

function App() {
	return (
		<CssVarsProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Content />
			<Footer />
		</CssVarsProvider>
	)
}

export default App
