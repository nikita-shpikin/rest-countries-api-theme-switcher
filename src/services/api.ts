// Логика работы с API
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Типы данных для запроса и ответа
interface User {
	id: number
	name: string
	email: string
}
interface GetUsersResponse {
	users: User[]
}

export const api = createApi({
	reducerPath: 'api',
	// Уникальное имя для API редьюсера
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://restcountries.com/v3.1',
		// Базовый URL
	}),
	endpoints: builder => ({
		getUsers: builder.query<GetUsersResponse, void>({
			query: () => '/all',
			// Эндпоинт для получения списка пользователей
		}),
	}),
})

export const { useGetUsersQuery } = api
// Хук для использования в компонентах
