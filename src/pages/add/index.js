import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {
    AddWrapper,
    FormWrapper,
    ClassArea,
    ClassInput,
    ContentArea,
    ContentInput,
    Text,
    SubBtn
} from './style';

class Add extends Component {
    render() {
        const { inputValue, areaValue, handleInputChange, handleAreaChange, handleClick } = this.props;
        return (
            <AddWrapper>
                <FormWrapper>
                    <ClassArea>
                        <Text htmlFor="class">任务类型</Text>
                        <ClassInput id="class" type="text"
                            onChange={handleInputChange}
                            value={inputValue}></ClassInput>
                    </ClassArea>
                    <ContentArea>
                        <Text htmlFor="content">任务内容</Text>
                        <ContentInput id="content" cols="5"
                            onChange={handleAreaChange}
                            value={areaValue}></ContentInput>
                    </ContentArea>
                </FormWrapper>
                <SubBtn onClick={handleClick}>提交</SubBtn>
            </AddWrapper>
        )
    }
}

const mapState = (state) => ({
    inputValue: state.getIn(['add', 'inputValue']),
    areaValue: state.getIn(['add', 'areaValue'])
});

const mapDispatch = (dispatch) => ({
    handleInputChange(e) {
        dispatch(actionCreators.InputChange(e.target.value));
    },
    handleAreaChange(e){
        dispatch(actionCreators.AreaChange(e.target.value));
    },
    handleClick(){
        dispatch(actionCreators.SubmitItem());
    }
});

export default connect(mapState, mapDispatch)(Add);