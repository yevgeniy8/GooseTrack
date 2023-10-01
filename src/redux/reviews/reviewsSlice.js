// import { createSlice } from '@reduxjs/toolkit';

// import { fetchReviews, addReview, deleteReview, updateReview, fetchOwnReviews } from './reviewsOperations';

// const handlePending = state => {
//     state.isLoading = true;
// };
// const handleRejected = (state, { payload }) => {
//     state.isLoading = false;
//     state.error = payload;
// };

// export const reviewsSlice = createSlice({
//     name: 'reviews',
//     initialState: {
//         reviews: [],
//         ownReviews: {
//             rating: '',
//             review: '',
//         },
//         isLoading: false,
//         error: null,
//     },
//     reducers: {
//         changeRating(state, action) {
//             state.ownReviews.rating = action.payload;
//         },
//     },

//     extraReducers: builder => {
//         builder
//             .addCase(fetchReviews.pending, handlePending)
//             .addCase(fetchReviews.fulfilled, (state, { payload }) => {
//                 state.isLoading = false;
//                 state.error = payload;
//             })
//             .addCase(fetchReviews.rejected, handleRejected)

//             .addCase(fetchOwnReviews.pending, handlePending)
//             .addCase(fetchOwnReviews.fulfilled, (state, { payload }) => {
//                 state.isLoading = false;
//                 state.error = null;
//                 state.ownReviews = payload;
//             })
//             .addCase(fetchOwnReviews.rejected, handleRejected)

//             .addCase(addReview.pending, handlePending)
//             .addCase(addReview.fulfilled, (state, { payload }) => {
//                 state.reviews = [...state.reviews, payload];
//                 state.ownReviews = [...state.ownReviews, payload];
//                 state.isLoading = false;
//                 state.error = null;
//             })
//             .addCase(addReview.rejected, handleRejected)

//             .addCase(deleteReview.pending, handlePending)
//             .addCase(deleteReview.fulfilled, (state, { payload }) => {
//                 state.isLoading = false;
//                 state.error = null;
//                 state.reviews = Array.isArray(state.reviews)
//                     ? state.reviews.filter(review => review.id !== payload.id)
//                     : [];
//                 state.ownReviews = state.ownReviews?.filter(
//                     review => review.id !== payload.id
//                 );
//             })
//             .addCase(deleteReview.rejected, handleRejected)

//             .addCase(updateReview.pending, handlePending)
//             .addCase(updateReview.fulfilled, (state, { payload }) => {
//                 state.isLoading = false;
//                 state.error = null;
//                 state.reviews = state.reviews?.map(review => {
//                     if (review._id === payload._id) {
//                         return payload;
//                     }
//                     return review;
//                 });
//                 state.ownReviews = state.ownReviews?.map(review =>
//                     review.id === payload.id ? payload : review
//                 );
//             })
//             .addCase(updateReview.rejected, handleRejected);
//         //     .addCase(logOut.fulfilled, state => {
//         //         state.reviews = [];
//         //         state.ownReviews = [];
//         //         state.error = null;
//         //         state.isLoading = false;
//         // })
//     },
// });

// export const reviewsReducer = reviewsSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import {
    fetchReviews,
    addReview,
    editReview,
    deleteReview,
    fetchReviewById,
} from './reviewsOperations';

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        userReview: {
            rating: '',
            review: '',
        },
        isLoading: false,
        error: null,
    },
    reducers: {
        changeRating(state, action) {
            state.userReview.rating = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchReviews.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.reviews = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addReview.pending, state => {
                state.isLoading = true;
            })
            .addCase(addReview.fulfilled, (state, action) => {
                state.userReview = action.payload;
                state.reviews = [...state.reviews, action.payload];
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addReview.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteReview.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteReview.fulfilled, (state, action) => {
                state.userReview = {
                    rating: '',
                    review: '',
                };
                state.reviews = state.reviews.filter(
                    review => review.id !== action.payload._id
                );
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteReview.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(editReview.pending, state => {
                state.isLoading = true;
            })
            .addCase(editReview.fulfilled, (state, action) => {
                state.userReview = action.payload;
                const index = state.reviews.findIndex(
                    review => review.id === action.payload._id
                );
                state.reviews.splice(index, 1, action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(editReview.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchReviewById.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchReviewById.fulfilled, (state, action) => {
                if (action.payload) {
                    state.userReview = action.payload;
                } else {
                    state.userReview = {
                        rating: '',
                        review: '',
                    };
                }
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchReviewById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// export const { addReviews, deleteReviews } = reviewSlice.actions;
export const { changeRating } = reviewSlice.actions;
export const reviewReducer = reviewSlice.reducer;
