import { toast } from 'react-toastify';
import api, { parseDjangoError } from '../../utilities/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// async api calls
export const login = createAsyncThunk('auth.slice/login', async data => await api.post('login/', data));
export const register = createAsyncThunk('auth.slice/register', async data => await api.post('registration', data));

const auth = createSlice({
    name: 'auth', // a unique name for identifying the reducer in the root reducer
    reducers: ({}),
    initialState: ({ loading: false, error: false, user: null, success: false, }), // reducer's initial states
    extraReducers: ({ addCase }) => { // used for updating the states when fetching an api data and error handling
        addCase(login.pending, state => { state.loading = true; });
        addCase(register.pending, state => { state.loading = true; state.error = state.success = false; });
        addCase(register.fulfilled, (state, { payload }) => { state.error = state.loading = false; state.success = true; toast.success(payload); });
        addCase(register.rejected, (state, { error }) => { state.success = state.loading = false; state.error = error; toast.error(parseDjangoError(error)); });
    },
});

export default auth.reducer;