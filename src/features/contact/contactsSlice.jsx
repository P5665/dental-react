import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const postContact = createAsyncThunk('contacts/postContact', async (contact, { dispatch }) => {
	try {
		const response = await fetch(baseUrl + 'contacts', {
			method: 'POST',
			body: JSON.stringify(contact),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			return Promise.reject('Unable to post response, status: ' + response.status);
		}

		const data = await response.json();
		dispatch(addContact(data)); // Dispatch the addComment action with the received data
	} catch (error) {
		return Promise.reject(error);
	}
});

const initialState = {
	contactsArray: [], // Fulfilled
	isLoading: true, // Pending
	errMsg: '', // Rejected
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: (state, action) => {
			const newContact = {
				id: state.contactsArray.length + 1,
				...action.payload,
			};
			state.contactsArray.push(newContact);
		},
	},
	extraReducers: {
		// Not using fetch, but might set up an admin section to show contacts and have sort
		//
		//
		// [fetchContacts.pending]: (state) => {
		// 	state.isLoading = true;
		// },
		// [fetchContacts.fulfilled]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.errMsg = '';
		// 	state.contactsArray = action.payload;
		// },
		// [fetchContacts.rejected]: (state, action) => {
		// 	state.isLoading = false;
		// 	state.errMsg = action.error ? action.error.message : 'Fetch failed';
		// },
		[postContact.rejected]: (state, action) => {
			state.errMsg = action.error ? action.error.message : 'Fetch failed';
		},
	},
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact } = contactsSlice.actions;
