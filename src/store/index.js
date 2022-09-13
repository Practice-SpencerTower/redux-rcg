import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// takes object as argument
// each slice needs a name/identifier
// redux toolkit uses immer to detect state changes
// can change aspects of state we want to change
// state is still immutable
// immer updates state in the background
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

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
