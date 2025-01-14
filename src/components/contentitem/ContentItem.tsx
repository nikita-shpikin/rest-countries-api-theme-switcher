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

interface Country {
	name: string
}

function ContentItem() {
	// const { data, error, isLoading } = useGetUsersQuery<Country[]>()

	// console.log(typeof data)

	// if (isLoading) {
	// 	return <div>Loading...</div> // Показываем сообщение о загрузке
	// }

	// if (error) {
	// 	return <div>Error: {error.message}</div> // Показываем ошибку, если она произошла
	// }

	// if (!data || data.length === 0) {
	// 	return <div>No users found</div> // Показываем, если нет данных
	// }

	return (
		<>
			<СardItem>
				<BoxTitle>
					<TitleItem level='h2' startDecorator={<FlagIcon />}>
						Netherlands
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
						<ValueItem>16 655 799</ValueItem>
					</Grid>
					<Grid xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<MapOutlinedIcon />}>
							Region
						</SubtitleItem>
					</Grid>
					<Grid xs={5}>
						<ValueItem>Europe</ValueItem>
					</Grid>
					<Grid xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<HomeWorkOutlinedIcon />}>
							Capital
						</SubtitleItem>
					</Grid>
					<Grid xs={5}>
						<ValueItem>Amsterdam</ValueItem>
					</Grid>
					<Grid xs={7} sx={{ padding: '0 0 0 15px' }}>
						<SubtitleItem level='h3' startDecorator={<TranslateOutlinedIcon />}>
							Language
						</SubtitleItem>
					</Grid>
					<Grid xs={5}>
						<ValueItem>Dutch</ValueItem>
					</Grid>
				</Grid>
			</СardItem>
			{/* <ul>
				{data.map(user => (
					<li>
						<h3>{user.name}</h3>
					</li>
				))}
			</ul> */}
		</>
	)
}

export default ContentItem
