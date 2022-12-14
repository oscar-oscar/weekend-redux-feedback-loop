import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducers
// default state value is empty string (may be empty array in other instances)
// dispatch takes in action
const feeling = ( state = 0, action ) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state //returns state default value
}

const understanding = ( state = 0, action ) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state //returns state default value
}

const support = ( state = 0, action ) => {
    if(action.type === 'SET_SUPPORT'){
        return action.payload;
    }else if (action.type === 'CLEAR_ALL'){
        return ''
    }
    return state
}

const comments = ( state = '', action ) => {
    if(action.type === 'SET_COMMENTS'){
        return action.payload;
    }else if (action.type === 'CLEAR_ALL'){
        return ''
    }
    return state
}

// Redux store
// Redux store! Keeps track of all reducers
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
           
        }
    ),

    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();


