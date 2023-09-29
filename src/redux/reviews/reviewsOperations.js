// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchReviews = createAsyncThunk(
//     'reviews/fetchAll',
//     async(_, thunkAPI) => {
//     try {
//         const { data } = await axios.get('reviews');
//         return data.dara.reviews;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
//      }
// );

// export const fetchOwnReviews = createAsyncThunk(
//     'reviews/fetchOwn',
//     async (_, thunkAPI) => {
//         try {
//             const { data } = await axios.get('reviews/own');
//             return data.data.reviews;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);

//         }
//     }
// );

// export const addReview = createAsyncThunk(
//     'reviews/addReview',
//     async (review, thunkAPI) => {
//         try {
//             const { data } = await axios.post('/reviews', review);
//             return data.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const deleteReview = createAsyncThunk(
//     'reviews/deleteReviews',
//     async (reviewId, thunkAPI) => {
//         try {
//             const { data } = await axios.delete(`/reviews/own/${reviewId}`);
//             return data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// export const updateReview = createAsyncThunk(
//     'reviews/updateReviews',
//     async ({ id, review }, thunkAPI) => {
//     try {
//         const { data } = await axios.patch(`/reviews/own/${id}`, review);
//         return data.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
//     }
// );


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com/api-docs/#/';

export const fetchReviews = createAsyncThunk(
    'reviews/getReviews',
    async ({ page, limit }, thunkAPI) => {
        try {
            const { data } = await axios.get(
                `/api/reviews?page=${page}&limit=4${limit}`
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
            const { data } = await axios.post('/api/reviews', review);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteReview = createAsyncThunk(
    'reviews/deleteReviews',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/api/reviews/${id}`);

            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editReview = createAsyncThunk(
    'reviews/editReviews',
    async ({ id, review }, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/api/reviews/${id}`, review);

            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchReviewById = createAsyncThunk(
    'reviews/fetchReviewById',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.get(`/api/reviews/${id}`);
            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);