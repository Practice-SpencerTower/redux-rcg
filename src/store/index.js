import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

const store = configureStore({
    reducer: counterReducer,
    auth: authReducer,
});

// connect react-app to redux store
export default store;
