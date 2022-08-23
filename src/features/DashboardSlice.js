import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
};
const dashboardSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.loggedIn = true;
        },
        clear(state, action) {
            state.loggedIn = false;
        }
    }
});

export const dashboardActions = dashboardSlice.actions;
export default dashboardSlice;