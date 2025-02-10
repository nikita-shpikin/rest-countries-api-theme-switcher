import styled from '@emotion/styled'
import { Card, Typography } from '@mui/joy'

export const СardItem = styled(Card)`
	padding: 0;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	height: 220px;

	border-radius: 8px;
`

export const BoxTitle = styled(Card)`
	box-sizing: border-box;
	width: 100%;
	padding: 15px;

	border: none;
	border-radius: 8px 8px 0 0;
	border-bottom: 1px solid var(--joy-palette-neutral-outlinedBorder);
`

export const TitleItem = styled(Typography)`
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	display: inline-flex;
`

export const SubtitleItem = styled(Typography)`
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
`

export const ValueItem = styled(Typography)`
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 150%;
`
