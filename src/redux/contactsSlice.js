import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false
    },
    extraReducers: (builder) => builder.addCase(fetchContacts.pending, (state) => {
        state.loading = true;
    }).addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    }).addCase(fetchContacts.rejected, (state) => {
        state.error = true;
    })
})

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;