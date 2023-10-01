// export const selectError = state => state?.reviews?.error;
// export const selectAllReviews = state => state?.reviews?.reviews;
// export const selectOwnReviews = state => state?.reviews?.ownReviews;
// export const selectIsLoading = state => state?.reviews?.isLoading;


export const selectReviews = state => state.reviews.reviews;
export const selectIsLoading = state => state.reviews.isLoading;
export const selectError = state => state.reviews.error;
export const selectUserReview = state => state.reviews.userReview;