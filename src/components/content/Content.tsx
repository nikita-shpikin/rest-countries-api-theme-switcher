import SearchIcon from '@mui/icons-material/Search'
import { Box, Grid } from '@mui/joy'
import ContentItem from '../contentitem/ContentItem'
import {
	ContentContainer,
	ContentInput,
	ContentSelect,
	ContentWrapper,
} from './Content.styled'

function Content() {
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
					{[...Array(19)].map((_, index) => (
						<Grid xs={14} sm={7} md={6.75} lg={4.75} xl={3.75}>
							<ContentItem key={index} />
						</Grid>
					))}
				</Grid>
			</ContentContainer>
		</Box>
	)
}

export default Content
