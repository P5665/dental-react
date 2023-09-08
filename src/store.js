import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { servicesReducer } from './features/services/servicesSlice';
import { dentistsReducer } from './features/dentists/dentistsSlice';
import { legalReducer } from './features/legal/legalSlice';
import { faqReducer } from './features/faq/faqSlice';
import { contactsReducer } from './features/contact/contactsSlice';

export const store = configureStore({
	reducer: {
		services: servicesReducer,
		dentists: dentistsReducer,
		legal: legalReducer,
		faq: faqReducer,
		contacts: contactsReducer,
	},
	middleware: [...getDefaultMiddleware(), logger],
});
