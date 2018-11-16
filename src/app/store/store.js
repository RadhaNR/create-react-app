import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}



const configureStore = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}
export default configureStore;


