import {createStore, applyMiddleware, combineReducers} from 'redux';
import hackerNewsReducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';
import promiseMiddleware from 'redux-promise-middleware';
import redditReducer from './redditReducer';

const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
