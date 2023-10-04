import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        userName: ''
    },
    reducers: {
        'login': (state, action) => {
            state.userName = action.payload
            console.log(2, state)
        }
    }
})

export const { login } = slice.actions
export default slice.reducer