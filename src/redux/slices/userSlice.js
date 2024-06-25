import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user : null
    },
    //actions for the user object
    reducers: {
        login : (state, action) => {
            state.user = action.payload
        },
        logout : (state) => {
            state.user = null
        }
    }
})

export const { login, logout }= userSlice.actions
export const selectUser = (state) => state.auth.user
export default userSlice.reducer