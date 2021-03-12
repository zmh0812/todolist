import { fromJS } from 'immutable';

const defaultState = fromJS({
    date: '2020/12/9 WED'
});

export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }  
};