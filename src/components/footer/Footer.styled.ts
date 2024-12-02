import styled from '@emotion/styled'
import { Container, Typography } from '@mui/joy'

export const FooterContainer = styled(Container)`
	padding: 20px;

	max-width: 1440px;

	display: flex;
	align-items: center;
	justify-content: center;
`

export const FooterTitle = styled(Typography)`
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 22px;

	@media (max-width: 992px) {
		font-size: 14px;
	}
`
