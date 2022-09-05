import { createStore } from 'redux';

// store

// reducer
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + 1 };
    }

    if (action.type === 'decrement') {
        return { counter: state.counter - 1 };
    }

    if (action.type === 'increase') {
        return { counter: state.counter + action.amount };
    }

    return state;
};

const store = createStore(counterReducer);

// connect react-app to redux store
export default store;
