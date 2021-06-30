import {applyMiddleware, createStore} from 'redux';
import reducer from "./reducers";
import thunkMiddleWare from 'redux-thunk';

const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type:action
        })
    }
    return next(action)
};

const logMiddleWare = ({getState}) => (next) => (action) => {
    console.log(action.type);
    return next(action)
};

const store = createStore(reducer, applyMiddleware(thunkMiddleWare, stringMiddleWare, logMiddleWare));

// const myAction = (dispatch) => {
//     setTimeout(()=> dispatch({
//             type: 'DELAYED_ACTION'
//         }), 2000);
// };

const delayedActionCreatore = (payload) => (dispatch) => {
    setTimeout(()=> dispatch({
        type: 'DELAYED_ACTION'
    }), payload);
};

store.dispatch(delayedActionCreatore(3000));

export default store;