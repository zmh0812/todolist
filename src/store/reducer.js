import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as addReducer } from '../pages/add/store';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    add: addReducer
});