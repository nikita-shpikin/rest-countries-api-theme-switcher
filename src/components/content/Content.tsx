import SearchIcon from '@mui/icons-material/Search'
import { Box, Grid } from '@mui/joy'
import { useGetUsersQuery } from '../../services/api'
import ContentItem from '../contentitem/ContentItem'
import {
	ContentContainer,
	ContentInput,
	ContentSelect,
	ContentWrapper,
} from './Content.styled'

interface Country {
	name: string
}

function Content() {
	const { data, error, isLoading } = useGetUsersQuery<Country[]>()

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (!data || data.length === 0) {
		return <div>No users found</div>
	}

	return (
		<Box as='main'>
			<ContentContainer disableGutters={true} maxWidth={false}>
				<ContentWrapper component='section'>
					<ContentInput
						placeholder='Search for a country...'
						endDecorator={<SearchIcon />}
					/>

					<ContentSelect placeholder='Select a pet' />
				</ContentWrapper>

				<Grid
					spacing={0}
					columns={16}
					container
					alignItems='center'
					sx={{
						margin: '0 !important',
						justifyContent: {
							xs: 'center',
							sm: 'center',
							lg: 'center',
							md: 'center',
							xl: 'flex-start',
						},
						gap: '30px',
					}}
				>
					{data?.slice(0, 10).map((country, index) => (
						<Grid xs={14} sm={7} md={6.75} lg={4.75} xl={3.75} key={index}>
							<ContentItem country={country} />
						</Grid>
					))}
				</Grid>
			</ContentContainer>
		</Box>
	)
}

export default Content
