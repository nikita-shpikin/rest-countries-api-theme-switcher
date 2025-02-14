/** @jsxImportSource @emotion/react */
import BedtimeIcon from '@mui/icons-material/Bedtime'
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined'
import { useColorScheme } from '@mui/joy'
import Box from '@mui/joy/Box'
import { HeaderButton, HeaderContainer, HeaderTitle } from './Header.styled'

function Header() {
	const { mode, setMode } = useColorScheme()

	const toggleTheme = () => {
		setMode(mode === 'light' ? 'dark' : 'light')
	}

	return (
		<Box
			as='header'
			sx={{
				boxShadow: '0 4px 8px rgba(var(--joy-palette-primary-rgb), 0.1)',
			}}
		>
			<HeaderContainer disableGutters={true} maxWidth={false}>
				<HeaderTitle level='h2'>Where is the world?</HeaderTitle>

				<HeaderButton
					onClick={toggleTheme}
					startDecorator={
						mode === 'light' ? <BedtimeOutlinedIcon /> : <BedtimeIcon />
					}
					variant='plain'
					size='sm'
					color='neutral'
				>
					{mode === 'light' ? 'Light' : 'Dark'} Mode
				</HeaderButton>
			</HeaderContainer>
		</Box>
	)
}

export default Header
