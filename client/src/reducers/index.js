import {combineReducers} from 'redux';
import user from './user_reducer';
import articles from './articles_reducer';
import admin from './admin_reducer';

const rootReducer = combineReducers({
    user,
    articles,
    admin
});

export default rootReducer;