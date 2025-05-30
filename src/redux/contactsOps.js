import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6839a0bd6561b8d882b11940.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/getAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue()
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue()
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (_, thunkAPI) => {
    try {
        const response = await axios.post("/contacts/");
        return response.data;
    } catch {
        return thunkAPI.rejectWithValue()
    }
}) 