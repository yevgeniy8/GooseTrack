import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com';

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
            console.log(response.data);
            Notiflix.Notify.success('You register');
            return response.data;
        } catch (error) {
            Notiflix.Notify.failure('Not');
            thunkApi.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await axios.post('/auth/login', user);
        setAuthHeader(response.data.accessToken);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
        Notiflix.Notify.failure(error.response.data.message);
        // thunkApi.rejectWithValue(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await axios.post('/auth/logout');
        clearAuthHeader();
    } catch (error) {
        thunkApi.rejectWithValue(error);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.accessToken;

        // console.log(state);

        if (!persistedToken) {
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        // console.log('Refreshing');

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            // console.log(response);
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error);
        }
    }
);

