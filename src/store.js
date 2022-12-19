import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';

import reducer from './reducers';
const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
};

const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
}

const store = createStore(reducer, applyMiddleware(ThunkMiddleware, stringMiddleWare, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), 5000);
}

store.dispatch(delayedActionCreator(3000));
export default store;