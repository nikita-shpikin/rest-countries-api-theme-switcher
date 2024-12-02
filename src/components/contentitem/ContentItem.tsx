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

function ContentItem() {
	return (
		<>
			<СardItem>
				<BoxTitle>
					<TitleItem level='h2' startDecorator={<FlagIcon />}>
						Netherlands
					</TitleItem>
				</BoxTitle>
				<Grid container spacing={1} style={{ width: '100%', margin: '0' }}>
					<Grid item xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem
							level='h3'
							startDecorator={<PeopleOutlineOutlinedIcon />}
						>
							Population
						</SubtitleItem>
					</Grid>
					<Grid item xs={5}>
						<ValueItem>16 655 799</ValueItem>
					</Grid>
					<Grid item xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<MapOutlinedIcon />}>
							Region
						</SubtitleItem>
					</Grid>
					<Grid item xs={5}>
						<ValueItem>Europe</ValueItem>
					</Grid>
					<Grid item xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<HomeWorkOutlinedIcon />}>
							Capital
						</SubtitleItem>
					</Grid>
					<Grid item xs={5}>
						<ValueItem>Amsterdam</ValueItem>
					</Grid>
					<Grid item xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<TranslateOutlinedIcon />}>
							Language
						</SubtitleItem>
					</Grid>
					<Grid item xs={5}>
						<ValueItem>Dutch</ValueItem>
					</Grid>
				</Grid>
			</СardItem>
		</>
	)
}

export default ContentItem
