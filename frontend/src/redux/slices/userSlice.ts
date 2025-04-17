import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state:any, action:any) => {
            state.user = action.payload;
        
        },

        register: (state:any, action:any) => {
            state.user = action.payload;
        },
        logout: (state:any) => {
            state.user = null;
        },
    },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;