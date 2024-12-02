import styled from '@emotion/styled'
import { Box, Container, Input, Select } from '@mui/joy'

export const ContentContainer = styled(Container)`
	padding: 30px 0 235px;

	max-width: 1440px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`

export const ContentInput = styled(Input)`
	padding: 20px 15px;
	width: 100%;
`

export const ContentSelect = styled(Select)`
	padding: 22px 15px;

	width: 220px;
`

export const ContentWrapper = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;

	@media (max-width: 1440px) {
		padding: 0 10px;

		width: calc(100% - 20px);
	}

	@media (max-width: 992px) {
		flex-direction: column;
		align-items: flex-start;
	}
`
