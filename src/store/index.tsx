import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './features/PostSlice'

export const store  = configureStore({
    reducer:{
        app: PostReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;