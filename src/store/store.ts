// store.ts
import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/api'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		// Добавляем API редьюсер
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
	// Добавляем middleware для кэширования запросов
})
