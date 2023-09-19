import api from '../../utilities/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// async api calls
export const login = createAsyncThunk('auth.slice/login', async data => await api.post('login/', data));

const auth = createSlice({
    name: 'auth', // a unique name for identifying the reducer in the root reducer
    reducers: ({}),
    initialState: ({ loading: false, error: false, user: null }), // reducer's initial states
    extraReducers: ({ addCase }) => { // used for updating the states when fetching an api data and error handling
        addCase(login.pending, state => { state.loading = true; });
    },
});

export default auth.reducer;