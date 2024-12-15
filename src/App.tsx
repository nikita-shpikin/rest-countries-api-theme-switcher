import { CssBaseline, CssVarsProvider } from '@mui/joy'
import { Provider } from 'react-redux'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import theme from './features/theme/extendTheme'
import { store } from './store/store'

function App() {
	return (
		<Provider store={store}>
			<CssVarsProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Content />
				<Footer />
			</CssVarsProvider>
		</Provider>
	)
}

export default App
