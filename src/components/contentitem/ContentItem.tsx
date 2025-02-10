import FlagIcon from '@mui/icons-material/Flag'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined'
import { Grid } from '@mui/joy'
import {
	BoxTitle,
	SubtitleItem,
	TitleItem,
	ValueItem,
	СardItem,
} from './ContentItem.styled'

function ContentItem({ country }) {
	// console.log(country.capital)

	// Вывод списка столиц одна + многоточие
	const formatArray = (arr: string[]): string => {
		if (!arr || arr.length === 0) return 'Нет данных'

		const firstItem = arr[0].length > 13 ? arr[0].slice(0, 13) + '...' : arr[0]

		return arr.length > 1 ? `${firstItem}...` : firstItem
	}

	return (
		<>
			<СardItem>
				<BoxTitle>
					<TitleItem level='h2' startDecorator={<FlagIcon />}>
						{country.name.common}
					</TitleItem>
				</BoxTitle>
				<Grid container spacing={1} style={{ width: '100%', margin: '0' }}>
					<Grid xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem
							level='h3'
							startDecorator={<PeopleOutlineOutlinedIcon />}
						>
							Population
						</SubtitleItem>
					</Grid>
					<Grid xs={5}>
						<ValueItem>
							{country?.population?.toLocaleString('ru-RU') || 'Нет данных'}
						</ValueItem>
					</Grid>
					<Grid xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<MapOutlinedIcon />}>
							Region
						</SubtitleItem>
					</Grid>
					<Grid xs={5}>
						<ValueItem>{country.region}</ValueItem>
					</Grid>
					<Grid xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<HomeWorkOutlinedIcon />}>
							Capital
						</SubtitleItem>
					</Grid>
					<Grid xs={5}>
						{/* <ValueItem>{country.capital}</ValueItem> */}
						<ValueItem>{formatArray(country.capital)}</ValueItem>
					</Grid>
					<Grid xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<TranslateOutlinedIcon />}>
							Language
						</SubtitleItem>
					</Grid>
					<Grid xs={5}>
						<ValueItem>XXX</ValueItem>
					</Grid>
				</Grid>
			</СardItem>
		</>
	)
}

export default ContentItem
