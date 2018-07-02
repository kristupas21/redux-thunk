import { combineReducers } from 'redux';
import data from './reducer-test';
import loader from './reducer-loader';

export const allReducers = combineReducers({
    data,
    loader
});
