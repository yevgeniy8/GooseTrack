import { createSlice } from '@reduxjs/toolkit';

import {
    register,
    login,
    logout,
    refreshUser,
    editUser,
} from './authOperations';

const initialState = {
    user: {
        name: null,
        email: null,
        birthday: null,
        phone: null,
        skype: null,
        avatarURL: null,
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
                state.user = action.payload.user;
                state.token = action.payload.token;
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
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
            .addCase(editUser.fulfilled, (state, { payload }) => {
                state.user.name = payload.newUser.name;
                state.user.email = payload.newUser.email;
                state.user.birthday = payload.newUser.birthday;
                state.user.phone = payload.newUser.phone;
                state.user.skype = payload.newUser.skype;
                state.user.avatarURL = payload.newUser.avatarURL;
                state.user.birthday = payload.newUser.birthday;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(editUser.pending, (state, _) => {
                state.loading = true;
            })
            .addCase(editUser.rejected, (state, _) => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
            });
    },
});

export default authSlice.reducer;
