import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com';

export const fetchReviews = createAsyncThunk(
    'reviews/getReviews',
    async ({ page, limit }, thunkAPI) => {
        try {
            const { data } = await axios.get(
                `/reviews?page=${page}&limit=4${limit}`
            );

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addReview = createAsyncThunk(
    'reviews/addReviews',
    async (review, thunkAPI) => {
        try {
            const { data } = await axios.post('/reviews/own', review);
            return data;
        } catch (e) {
            Notiflix.Notify.failure('You`ve already submitted feedback');
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteReview = createAsyncThunk(
    'reviews/deleteReviews',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/reviews/own/`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editReview = createAsyncThunk(
    'reviews/editReviews',
    async ({ id, review }, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/reviews/own/`, review);

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchReviewById = createAsyncThunk(
    'reviews/fetchReviewById',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get(`/reviews/own/`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
