import { createSlice, TaskAbortError } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// takes object as argument
// each slice needs a name/identifier
// redux toolkit uses immer to detect state changes
// can change aspects of state we want to change
// state is still immutable
// immer updates state in the background
createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

// reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + 1, showCounter: state.showCounter };
    }

    if (action.type === 'decrement') {
        return { counter: state.counter - 1, showCounter: state.showCounter };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        };
    }

    return state;
};

const store = createStore(counterReducer);

// connect react-app to redux store
export default store;
