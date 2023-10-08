import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com/api';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkApi) => {
        try {
            const response = await axios.post('/auth/register', user);
            setAuthHeader(response.data.token);
            Notiflix.Notify.success('You register');
            return response.data;
        } catch (error) {
            Notiflix.Notify.failure(`${error.response.data.message}`);
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await axios.post('/auth/login', user);
        setAuthHeader(response.data.token);
        Notiflix.Notify.success(`Welcome ${response.data.user.name}`);
        return response.data;
    } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
        return thunkApi.rejectWithValue(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await axios.post('/auth/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;

        if (!persistedToken) {
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        try {
            // console.log(persistedToken);
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            // console.log('User refreshed:', response.data);
            return response.data;
        } catch (error) {
            // console.error('Error refreshing user:', error);
            // throw error;
            return thunkApi.rejectWithValue(error.message);
        }
    }
);


export const editUser = createAsyncThunk('auth/edit', async (newUser, thunkApi) => {
    const { auth: { token } } = thunkApi.getState();

    if (!token) {
        return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {

        setAuthHeader(token);

        console.log(newUser);
        // const veryfiedUser = {
        //     ...newUser,
        //     token
        // }

        const response = await axios.patch('/users/edit', newUser);

        if (response) { Notiflix.Notify.success(`User has been updated successfuly`); }

        return response.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }



});
