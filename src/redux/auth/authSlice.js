import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, refreshUser } from './authOperations';

const initialState = {
    user: {
        name: null,
        email: null,
        birthday: null,
        phone: null,
        skype: null,
        userAvatar: null,
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
            })
            .addCase(logout.fulfilled, state => {
                state.user = {
                    name: null,
                    email: null,
                    birthday: null,
                    phone: null,
                    skype: null,
                    userAvatar: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            });
    },
});

// export const { register, login } = authSlice.actions;

export default authSlice.reducer;