import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFriends, removeFriend} from '../../bll/friendsReducer';
import {WithAuthRedirect} from '../common/Hoc/WithAuthRedirect';
import {Friends} from './Friends';
import {startDialogs} from '../../bll/dialogsReducer';


const FriendsContainer = () => {


    const friends = useSelector(state => state.friendsPage.friends)
    const loadingFriends = useSelector(state => state.friendsPage.loadingFriends)

    const dispatch = useDispatch();

    const openDialogs = (friendsId) => {
        dispatch(startDialogs(friendsId))
    }


    const unFollowFriend = React.useCallback((friendId) => {
        dispatch(removeFriend(friendId))
    }, [dispatch])


    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch]);

    return <Friends
        unFollowFriend={unFollowFriend}
        openDialogs={openDialogs}
        friends={friends}
        loadingFriends={loadingFriends}
    />
};


export default WithAuthRedirect(FriendsContainer);