import { createSlice } from '@reduxjs/toolkit';
import { fetchtasks, addtask, edittask, deletetask } from './tasksOperations';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchtasks.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchtasks.fulfilled, (state, action) => {
                state.tasks = action.payload.tasks;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchtasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        // .addCase(addtask.pending, state => {
        //     state.isLoading = true;
        // })
        // .addCase(addtask.fulfilled, (state, action) => {
        //     state.usertask = action.payload;
        //     state.tasks = [...state.tasks, action.payload];
        //     state.isLoading = false;
        //     state.error = null;
        // })
        // .addCase(addtask.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })
        // .addCase(deletetask.pending, state => {
        //     state.isLoading = true;
        // })
        // .addCase(deletetask.fulfilled, (state, action) => {

        //     state.isLoading = false;
        //     state.error = null;
        // })
        // .addCase(deletetask.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })
        // .addCase(edittask.pending, state => {
        //     state.isLoading = true;
        // })
        // .addCase(edittask.fulfilled, (state, action) => {

        //     state.isLoading = false;
        //     state.error = null;
        // })
        // .addCase(edittask.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
    },
});

// export const { addtasks, deletetasks } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
