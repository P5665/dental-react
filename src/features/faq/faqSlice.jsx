import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchFaq = createAsyncThunk('faq/fetchFaq', async () => {
	const response = await fetch(baseUrl + 'faq');
	if (!response.ok) {
		return Promise.reject('Unable to fetch request, status: ' + response.status);
	}
	const data = await response.json();
	return data;
});

const initialState = {
	faqArray: [],
	uniqueCategories: [],
	isLoading: true,
	errorMessage: '',
};

const faqSlice = createSlice({
	name: 'faq',
	initialState,
	reducers: {
		computeUniqueCategories: (state) => {
			// Extract categories from faqArray and make them unique using a Set
			const categories = new Set(state.faqArray.map((faq) => faq.category));
			state.uniqueCategories = Array.from(categories); // Convert Set to an array
		},
	},
	extraReducers: {
		[fetchFaq.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFaq.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = '';

			state.faqArray = mapImageURL(action.payload);
		},
		[fetchFaq.rejected]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.error ? action.error.message : 'Fetch failed';
		},
	},
});

export const faqReducer = faqSlice.reducer;
export const { computeUniqueCategories } = faqSlice.actions;

export const selectUniqueCategories = (state) => {
	return state.faq.uniqueCategories;
};

export const selectFaqByCategory = (category) => (state) => {
	return state.faq.faqArray.find((faq) => faq.category.toLowerCase() === category.toLowerCase());
};

export const selectAllFaq = (state) => {
	return state.faq.faqArray;
};
