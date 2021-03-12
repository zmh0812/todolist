import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {
    TodoWrapper,
    TodoTitle,
    TodoItem,
    ItemClass,
    DeleteBtn,
    ItemContent
} from '../style';

class Todo extends PureComponent {
    render() {
        const { list, handleDelete, handleComplete } = this.props;
        return (
            <TodoWrapper>
                <TodoTitle>正在进行</TodoTitle>
                { list.map((item, index) => {
                    return (
                        <TodoItem
                            key={item.get('id')}>
                            <ItemClass>
                                {item.get('class')}
                                <DeleteBtn onClick={() => { handleDelete(index) }}>删除</DeleteBtn>
                                <span className="iconfont icon"
                                    onClick={() => { handleComplete(index) }}>&#xe641;</span>
                            </ItemClass>
                            <ItemContent>{item.get('content')}</ItemContent>
                        </TodoItem>
                    )
                })}

            </TodoWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'todo'])
});

const mapDispatch = (dispatch) => {
    return {
        handleDelete(index) {
            dispatch(actionCreators.DeleteItem(index))
        },
        handleComplete(index) {
            dispatch(actionCreators.CompleteItem(index))
        }
    }
};

export default connect(mapState, mapDispatch)(Todo);