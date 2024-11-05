import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slice/themeSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

// Define RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
