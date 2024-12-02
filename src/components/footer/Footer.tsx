import Box from '@mui/joy/Box'
import { FooterContainer, FooterTitle } from './Footer.styled'

function Footer() {
	return (
		<Box
			as='footer'
			sx={{
				boxShadow: '0px 0px 16px rgba(var(--joy-palette-primary-rgb), 0.1)',
			}}
		>
			<FooterContainer disableGutters={true} maxWidth={false}>
				<FooterTitle level='h3'>Made by Shpikin Nikita, 2024</FooterTitle>
			</FooterContainer>
		</Box>
	)
}

export default Footer
