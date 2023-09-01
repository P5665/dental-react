import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchDentists = createAsyncThunk('dentitsts/fetchDentists', async () => {
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
			console.log('🚀 ~ file: dentistsSlice.jsx:29 ~ action:', action);
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
	console.log('🚀 ~ file: dentistsSlice.jsx:45 ~ selectDentistByName ~ name:', name);
	console.log('🚀 ~ file: dentistsSlice.jsx:43 ~ selectDentistByName ~ state.dentists:', state);
	return state.dentists.dentistsArray.find((dentist) => dentist.name.toLowerCase().replace(/\s/g, '-') === name);
};

export const selectAllDentists = (state) => {
	console.log('🚀 ~ file: dentistsSlice.jsx:48 ~ selectAllDentists ~ state:', state);

	return state.dentists.dentistsArray;
};
