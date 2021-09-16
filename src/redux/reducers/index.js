
import postsReducer from './posts';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    
    posts: postsReducer
})

export default rootReducer;