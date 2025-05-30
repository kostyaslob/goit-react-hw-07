import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            {"id": "id-1", "name": "Kostya", "number": "123-45-67"},
            {"id": "id-2", "name": "Roman", "number": "765-43-21"},
        ]
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);         
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
})

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;