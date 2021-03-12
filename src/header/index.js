import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Title,
    Logo,
    Date
} from './style';

class Header extends PureComponent {
    render() {
        const { date } = this.props;
        return (
            <HeaderWrapper>
                <Title>
                    <Link to="/">
                        <span className="iconfont icon1">&#xe600;</span>
                    </Link>
                    我的任务
                    <Link to="/add">
                        <span className="iconfont icon2">&#xe6c3;</span>
                    </Link>
                </Title>
                <Logo>
                    <span className="iconfont icon3">&#xe60c;</span>
                    <span className="iconfont icon4">&#xe607;</span>
                    <span className="iconfont icon5">&#xe61a;</span>
                </Logo>
                <Date>{date}</Date>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.get('header').get('date')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);