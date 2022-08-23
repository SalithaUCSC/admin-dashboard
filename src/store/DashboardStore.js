import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../features/DashboardSlice";

const store = configureStore({
    reducer: {
        login: dashboardSlice.reducer
    }
});

export default store;