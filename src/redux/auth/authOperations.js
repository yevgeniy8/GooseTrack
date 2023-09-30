import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await axios.post('/auth/login', user);
        setAuthHeader(response.data.token);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        thunkApi.rejectWithValue(error);
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
        const persistedToken = state.auth.token;

        // console.log(state);

        if (!persistedToken) {
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        // console.log('Refreshing');

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            thunkApi.rejectWithValue(error);
        }
    }
);
