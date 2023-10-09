import { createSlice } from '@reduxjs/toolkit';
import {
    fetchTasks,
    addTask,
    editTask,
    deleteTask,
} from './calendarOperations';

const handlePending = state => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const handleFetchFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.tasks = action.payload;
};

const handleAddFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.tasks.push(action.payload);
};

const handleEditFulfilled = (state, action) => {
    state.userTask = action.payload;
    const index = state.tasks.findIndex(task => task.id === action.payload._id);
    state.tasks.splice(index, 1, action.payload);
    state.isLoading = false;
    state.error = null;
};

const handleDeleteFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.tasks.findIndex(task => task._id === action.payload);
    state.tasks.splice(index, 1);
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        tasks: [],
        userTask: {
            // нужно проверить/добавить поля тасок
            title: '',
            start: '',
            end: '',
            priority: '',
        },
        isLoading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, handlePending)
            .addCase(fetchTasks.fulfilled, handleFetchFulfilled)
            .addCase(fetchTasks.rejected, handleRejected)
            .addCase(addTask.pending, handlePending)
            .addCase(addTask.fulfilled, handleAddFulfilled)
            .addCase(addTask.rejected, handleRejected)
            .addCase(deleteTask.pending, handlePending)
            .addCase(deleteTask.fulfilled, handleDeleteFulfilled)
            .addCase(deleteTask.rejected, handleRejected)
            .addCase(editTask.pending, handlePending)
            .addCase(editTask.fulfilled, handleEditFulfilled)
            .addCase(editTask.rejected, handleRejected);
    },
});

export const calendarReducer = calendarSlice.reducer;
