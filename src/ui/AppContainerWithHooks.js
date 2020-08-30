import React, {useEffect} from 'react';
import App from './App';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {initializeApp} from '../bll/appReduсer';
import Preloader from './common/Preloader/Preloader';
import {getNewMessages} from '../bll/dialogsReducer';

const AppContainerWithHooks = () => {

    const dispatch = useDispatch();

    const initialized = useSelector(state => state.app.initialized)
    const newMessagesCount = useSelector(state => state.dialogsPage.newMessagesCount)

    useEffect(() => {
        dispatch(initializeApp())
        setInterval(() => {
            dispatch(getNewMessages())
        }, 10000)
    }, [dispatch])


    if (!initialized) {
        return <Preloader/>
    }

    return <App
        newMessagesCount={newMessagesCount}/>
}
export default compose(
    withRouter,
)(AppContainerWithHooks)
