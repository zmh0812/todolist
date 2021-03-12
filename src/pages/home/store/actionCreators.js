import * as constants from './constants';
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    todo: data.todo,
    complete: data.complete
})

export const getInfo = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            dispatch(changeList(res.data.data));
        }).catch(() => {
            alert('获取不到数据');
        })
    }
};

export const DeleteItem = (index) => ({
    type: constants.DELETE_ITEM,
    index
});

export const CompleteItem = (index) => ({
    type: constants.COMPLETE_ITEM,
    index
});

export const RemoveItem = (index) => ({
    type: constants.REMOVE_ITEM,
    index
});