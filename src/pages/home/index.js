import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import Todo from './components/todo';
import Complete from './components/complete';
import {
    HomeWrapper
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Todo />
                <Complete />
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.getList();
    }
}

const mapDispatch = (dispatch) => {
    return {
        getList(){
            dispatch(actionCreators.getInfo());
        }
    }
}
export default connect(null, mapDispatch)(Home);