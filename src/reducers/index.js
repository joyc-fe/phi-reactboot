
import {combineReducers} from 'redux';

import articleReducer from './articleReducers.js';

const rootReducer = combineReducers({
    articleReducer: articleReducer
});

export default rootReducer;
