import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, refreshUser, editUser } from './authOperations';

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
                // console.log(action);
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
                // console.log('slice');
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
                // console.log(action);
                // if (action.payload === undefined) {
                //     state.isLoggedIn = false;
                //     state.isRefreshing = false;
                // }
                // else
                // {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                // }
            })
            .addCase(refreshUser.rejected, state => {
                // console.log('object');
                state.isRefreshing = false;
            })
            .addCase(editUser.fulfilled, (state, actions) => {

                state.user = actions.payload.newUser;
                state.isRefreshing = false;
                console.log( actions.payload);
            }).addCase(editUser.pending, state => {

                state.isRefreshing = true;

            }).addCase(editUser.rejected, (_, actions) => {

                console.log(actions.payload)
            })
            ;
    },
});

// export const { register, login } = authSlice.actions;

export default authSlice.reducer;
