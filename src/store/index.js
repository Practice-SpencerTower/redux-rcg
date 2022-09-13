import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';

const store = configureStore({
    reducer: counterSlice.reducer,
    auth: authSlice.reducer,
});

// action identifiers are automatically created - keys match the method names in reducers
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
// connect react-app to redux store
export default store;
