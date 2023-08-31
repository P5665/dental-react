import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
	const response = await fetch(baseUrl + 'services');
	if (!response.ok) {
		return Promise.reject('Unable to fetch request, status: ' + response.status);
	}
	const data = await response.json();
	return data;
});

const initialState = {
	servicesArray: [],
	isLoading: true,
	errorMessage: '',
};

const servicesSlice = createSlice({
	name: 'services',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchServices.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchServices.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = '';
			state.servicesArray = mapImageURL(action.payload);
		},
		[fetchServices.rejected]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.error ? action.error.message : 'Fetch failed';
		},
	},
});

export const servicesReducer = servicesSlice.reducer;

export const selectServicesByCategory = (category) => (state) => {
	return state.services.servicesArray.filter((service) => service.category === category) || [];
};
