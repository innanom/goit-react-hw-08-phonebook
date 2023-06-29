import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get("/contacts");
            return responce.data;
        }
        catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, number}, thunkAPI) => {
        try {
            const responce = await axios.post("/contacts", {name, number});
            console.log(responce.data);
            return responce.data;
        } catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactId}`);
            return responce.data;
        } catch (event) {
            return thunkAPI.rejectWithValue(event.message);
        }
    }
);