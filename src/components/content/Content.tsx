import SearchIcon from '@mui/icons-material/Search'
import { Box, Grid } from '@mui/joy'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGetCountryQuery } from '../../services/api'
import ContentItem from '../contentitem/ContentItem'
import {
	ContentContainer,
	ContentInput,
	ContentSelect,
	ContentWrapper,
} from './Content.styled'
const LIMIT = 20

function Content() {
	const { data, error, isLoading } = useGetCountryQuery()

	const [visibleData, setVisibleData] = useState([]) // Храним отображаемые данные
	const [count, setCount] = useState(LIMIT) // Сколько показываем

	const observer = useRef()

	useEffect(() => {
		if (data) {
			setVisibleData(data.slice(0, count))
		}
	}, [data, count])

	const loadMore = () => {
		if (count < data?.length) {
			setCount(prev => prev + LIMIT)
		}
	}

	// Ref для невидимого триггера загрузки
	const triggerRef = useRef(null)

	useLayoutEffect(() => {
		if (!triggerRef.current) return
		observer.current = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					loadMore()
				}
			},
			{ threshold: 1.0 }
		)

		observer.current.observe(triggerRef.current)

		return () => observer.current.disconnect()
	}, [])

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
					{visibleData?.map((country, index) => (
						<Grid xs={14} sm={7} md={6.75} lg={4.75} xl={3.75} key={index}>
							<ContentItem country={country} />
						</Grid>
					))}
				</Grid>
			</ContentContainer>

			<div ref={triggerRef} style={{ height: 1, background: 'transparent' }} />
		</Box>
	)
}

export default Content
