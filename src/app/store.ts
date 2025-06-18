import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../components/features/api/bookApi";

export const store = configureStore({
    reducer:{
        //BookApi Reducer Path

        [bookApi.reducerPath]: bookApi.reducer
    },

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware)
})