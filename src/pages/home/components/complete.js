import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {
    CompleteWrapper,
    CompleteTitle,
    CompleteItem,
    ItemClass,
    ItemContent
} from '../style';

class Complete extends PureComponent {
    render() {
        const { list, handleDelete } = this.props;

        return (
            <CompleteWrapper>
                <CompleteTitle>已完成</CompleteTitle>
                { list.map((item, index) => {
                    return (
                        <CompleteItem
                            key={item.get('id')}
                            onClick={() => {handleDelete(index)}}>
                            <ItemClass>
                                {item.get('class')}
                            </ItemClass>
                            <ItemContent>{item.get('content')}</ItemContent>
                        </CompleteItem>
                    )
                })}
            </CompleteWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'complete'])
});

const mapDispatch = (dispatch) => ({
    handleDelete(index){
        dispatch(actionCreators.RemoveItem(index));
    }
})

export default connect(mapState, mapDispatch)(Complete);