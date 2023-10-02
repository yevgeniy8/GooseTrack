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
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                // console.log(action);
                state.user = action.payload.user;
                // state.isLoggedIn = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
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
                state.accessToken = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                console.log(action);
                if (action.payload.accessToken) {
                    state.accessToken = action.payload.accessToken;
                    // window.location.reload();
                }
                state.user = action.payload;

                // console.log(state.user);
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
