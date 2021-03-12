import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    inputValue: '',
    areaValue: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.INPUT_CHANGE:
            return state.set('inputValue', fromJS(action.value));
        case constants.AREA_CHANGE:
            return state.set('areaValue', fromJS(action.value));
        case constants.SUBMIT_ITEM:
            return state.merge({
                inputValue: '',
                areaValue: ''
            });
        default:
            return state;
    }
};