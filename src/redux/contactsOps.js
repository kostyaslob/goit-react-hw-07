import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6839a0bd6561b8d882b11940.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/getAll", async () => {
    const response = await axios.get("/contacts");
    return response.data;
})

// export const addContact = 

// export const deleteContact =