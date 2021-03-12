import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    todo: [],
    complete: []
});

const changeList = (state, action) => {
    return state.merge({
        todo: fromJS(action.todo),
        complete: fromJS(action.complete)
    });
};

const deleteItem = (state, action) => {
    let copy = state.get('todo');
    return state.set('todo', copy.splice(fromJS(action.index), 1));
};

const completeItem = (state, action) => {
    let item = state.get('todo').slice(fromJS(action.index), fromJS(action.index + 1));
    return state.merge({
        todo: state.get('todo').splice(fromJS(action.index), 1),
        complete: [...state.get('complete'), ...item]
    });
};

const removeItem = (state, action) => {
    
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LIST:
            return changeList(state, action);
        case constants.DELETE_ITEM:
            return deleteItem(state, action);
        case constants.COMPLETE_ITEM: 
            return completeItem(state, action);
        case constants.REMOVE_ITEM:
            return state.set('complete', state.get('complete').splice(fromJS(action.index), 1));
        default:
            return state;
    }
}