import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../Hoc/WithAuthRedirect';
import {compose} from 'redux';
import {
    follow,
    followSuccess,
    getUsers, searchName, setPortionNumber, setSearchNameSuccess,
    toggleFollowingProgress,
    unFollow,
    unFollowSuccess
} from '../../bll/usersReducer';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage)
    }

    onPageChanged = (newPage) => {
        this.props.getUsers(newPage)
    }

    nextPortion = (portionNumber) => {
        this.props.setPortionNumber(portionNumber)
    }

    prevPortion = (portionNumber) => {
        this.props.setPortionNumber(portionNumber)
    }

    firstPortion = (portionNumber) => {
        this.props.setPortionNumber(portionNumber)
    }

    componentWillUnmount() {
        this.props.setSearchNameSuccess('')

    }

    render() {
        return <Users{...this.props}
                     nextPortion={this.nextPortion}
                     prevPortion={this.prevPortion}
                     firstPortion={this.firstPortion}
                     onPageChanged={this.onPageChanged}/>


    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalItemsCount: state.usersPage.totalItemsCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        portionSize: state.usersPage.portionSize,
        portionNumber: state.usersPage.portionNumber,


    }
}

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        toggleFollowingProgress,
        getUsers,
        follow,
        unFollow,
        setSearchNameSuccess,
        searchName,
        setPortionNumber
    }),
)(UsersContainer)