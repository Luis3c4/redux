import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/iceCream';
import userReducer from '../features/user/userSlice';
// import pkg from "redux-logger";
// const { createLogger } = pkg;
// const logger = createLogger();
export const store = configureStore({
    reducer: {
        cake:cakeReducer,
        ice:icecreamReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;