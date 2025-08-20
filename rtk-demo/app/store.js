import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice.js';
import icecreamReducer from '../features/icecream/iceCream.js';
import userReducer from '../features/user/userSlice.js';
import pkg from "redux-logger";
const { createLogger } = pkg;
const logger = createLogger();
export const store = configureStore({
    reducer: {
        cake:cakeReducer,
        ice:icecreamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})