import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchLegal = createAsyncThunk('legal/fetchLegal', async () => {
	const response = await fetch(baseUrl + 'legal');
	if (!response.ok) {
		return Promise.reject('Unable to fetch request, status: ' + response.status);
	}
	const data = await response.json();
	return data;
});

const initialState = {
	legalArray: [],
	isLoading: true,
	errorMessage: '',
};

const legalSlice = createSlice({
	name: 'legal',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchLegal.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchLegal.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = '';

			state.legalArray = mapImageURL(action.payload);
		},
		[fetchLegal.rejected]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.error ? action.error.message : 'Fetch failed';
		},
	},
});

export const legalReducer = legalSlice.reducer;

export const selectLegalByType = (type) => (state) => {
	console.log('🚀 ~ file: legalSlice.jsx:44 ~ selectLegalByType ~ type:', type);
	return state.legal.legalArray.filter((content) => content.type.toLowerCase() === type);
};
