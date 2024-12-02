import styled from '@emotion/styled'
import { Button, Container, Typography } from '@mui/joy'

export const HeaderContainer = styled(Container)`
	padding: 15px;

	max-width: 1440px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 992px) {
		padding: 15px 5px;
	}
`

export const HeaderTitle = styled(Typography)`
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;

	@media (max-width: 1200px) {
		font-size: 20px;
	}

	@media (max-width: 992px) {
		font-size: 16px;
	}
`

export const HeaderButton = styled(Button)`
	svg {
		width: 24px;
		height: 24px;
	}

	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;

	@media (max-width: 992px) {
		font-size: 14px;

		svg {
			width: 18px;
			height: 18px;
		}
	}
`
