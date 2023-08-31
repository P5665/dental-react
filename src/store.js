import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { servicesReducer } from './features/services/servicesSlice';
// import { campsitesReducer } from '../features/campsites/campsitesSlice';
// import { commentsReducer } from '../features/comments/commentsSlice';
// import { partnersReducer } from '../features/partners/partnersSlice';
// import { promotionsReducer } from '../features/promotions/promotionsSlice';
// import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
	reducer: {
		services: servicesReducer,
	},
	middleware: [...getDefaultMiddleware(), logger],
});
