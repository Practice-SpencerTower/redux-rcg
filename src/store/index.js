import { createSlice, configureStore } from '@reduxjs/toolkit';



const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
    auth: authSlice.reducer,
});

// action identifiers are automatically created - keys match the method names in reducers
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
// connect react-app to redux store
export default store;
