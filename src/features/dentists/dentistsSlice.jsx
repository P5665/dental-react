import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchDentists = createAsyncThunk('dentists/fetchDentists', async () => {
	const response = await fetch(baseUrl + 'dentists');
	if (!response.ok) {
		return Promise.reject('Unable to fetch request, status: ' + response.status);
	}
	const data = await response.json();
	return data;
});

const initialState = {
	dentistsArray: [],
	isLoading: true,
	errorMessage: '',
};

const dentistsSlice = createSlice({
	name: 'dentists',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchDentists.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchDentists.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = '';

			state.dentistsArray = mapImageURL(action.payload);
		},
		[fetchDentists.rejected]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.error ? action.error.message : 'Fetch failed';
		},
	},
});

export const dentistsReducer = dentistsSlice.reducer;

export const selectDentistByName = (name) => (state) => {
	return state.dentists.dentistsArray.find((dentist) => dentist.name.toLowerCase().replace(/\s/g, '-') === name);
};

export const selectAllDentists = (state) => {
	return state.dentists.dentistsArray;
};
