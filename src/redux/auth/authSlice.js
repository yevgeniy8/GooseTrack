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
            // .addCase(login.fulfilled, (state, { payload }) => {
            //     state.user.name = payload.user.name;
            //     state.user.email = payload.user.email;
            //     state.user.birthday = payload.user.birthday;
            //     state.user.phone = payload.user.phone;
            //     state.user.skype = payload.user.skype;
            //     state.user.avatarURL = payload.user.avatarURL;
            //     state.user.birthday = payload.user.birthday;
            //     state.token = payload.token;
            //     state.isLoggedIn = true;
            // })
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
<<<<<<< HEAD
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
=======
            .addCase(editUser.fulfilled, (state, actions) => {
                state.user = actions.payload.newUser;
                state.isRefreshing = false;
                console.log(state.user);
>>>>>>> 2c3aa16ab159709bdc9177a0e71b236e1a4300c1
            })
            .addCase(editUser.pending, (state, _) => {
                state.isRefreshing = true;
            })
            .addCase(editUser.rejected, (state, _) => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
            });
    },
});

// export const { register, login } = authSlice.actions;

export default authSlice.reducer;
