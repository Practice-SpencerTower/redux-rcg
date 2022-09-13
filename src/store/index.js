import { createSlice, configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: counterSlice.reducer,
    auth: authSlice.reducer,
});

// action identifiers are automatically created - keys match the method names in reducers
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
// connect react-app to redux store
export default store;
