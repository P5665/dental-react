import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const postAppointment = createAsyncThunk('appointments/postAppointments', async (appointment, { dispatch }) => {
	try {
		const response = await fetch(baseUrl + 'appointments', {
			method: 'POST',
			body: JSON.stringify(appointment),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			return Promise.reject('Unable to post response, status: ' + response.status);
		}
	} catch (error) {
		return Promise.reject(error);
	}
});

const initialState = {
	appointmentsArray: [], // Fulfilled
	isLoading: true, // Pending
	errMsg: '', // Rejected
};

const appointmentsSlice = createSlice({
	name: 'appointments',
	initialState,
	reducers: {
		addAppointment: (state, action) => {
			const newAppointment = {
				id: state.appointmentsArray.length + 1,
				...action.payload,
			};
			state.appointmentsArray.push(newAppointment);
		},
	},
	extraReducers: {
		[postAppointment.rejected]: (state, action) => {
			state.errMsg = action.error ? action.error.message : 'Fetch failed';
		},
	},
});

export const appointmentsReducer = appointmentsSlice.reducer;

export const { addAppointment } = appointmentsSlice.actions;
