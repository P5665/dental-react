import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { servicesReducer } from './features/services/servicesSlice';
import { dentistsReducer } from './features/dentists/dentistsSlice';

export const store = configureStore({
	reducer: {
		services: servicesReducer,
		dentists: dentistsReducer,
	},
	middleware: [...getDefaultMiddleware(), logger],
});
