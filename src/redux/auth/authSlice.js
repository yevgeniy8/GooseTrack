import { createSlice } from '@reduxjs/toolkit';

import { register, login } from './authOperations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                console.log(action);
                state.user = action.payload.user;
                state.isLoggedIn = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            });
    },
});

// export const { register, login } = authSlice.actions;

export default authSlice.reducer;
