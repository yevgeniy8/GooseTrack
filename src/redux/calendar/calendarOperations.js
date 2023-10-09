import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (date, thunkAPI) => {
        try {
            const { data } = await axios.get(`/tasks`, date);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (task, thunkAPI) => {
        try {
            const { data } = await axios.post('/tasks', task);

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/tasks/${id}`);

            return id;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const editTask = createAsyncThunk(
    'tasks/editTask',
    async ({ id, task }, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/tasks/${id}`, task);

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
