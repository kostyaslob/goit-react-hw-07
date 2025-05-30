import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";

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
    }).addCase(deleteContact.pending, (state) => {
        state.loading = true;
    }).addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id)
    }).addCase(deleteContact.rejected, (state) => {
        state.error = true;
    }).addCase(addContact.pending, (state) => {
        state.loading = true;
    }).addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload)
    }).addCase(addContact.rejected, (state) => {
        state.error = true;
    })
})

export default slice.reducer;