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
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionNumber, getPortionSize,
    getTotalUsersCount,
    getUsersSelector
} from '../../bll/selectors/usersSelectors';

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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
        portionNumber: getPortionNumber(state),
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