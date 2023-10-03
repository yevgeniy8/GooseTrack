import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com';

export const fetchtasks = createAsyncThunk('tasks/gettasks', async thunkAPI => {
    try {
        const { data } = await axios.get(`/tasks`);

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addtask = createAsyncThunk(
    'tasks/addtasks',
    async (task, thunkAPI) => {
        try {
            const { data } = await axios.post('/tasks', task);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deletetask = createAsyncThunk(
    'tasks/deletetasks',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/tasks/${id}`);

            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const edittask = createAsyncThunk(
    'tasks/edittasks',
    async ({ id, task }, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/tasks/${id}`, task);

            return data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);
