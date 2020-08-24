import React, {useEffect} from 'react';
import App from './App';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {initializeApp} from '../bll/appReduser';
import Preloader from './common/Preloader/Preloader';

const AppContainerWithHooks = () => {

    const dispatch = useDispatch();

    const initialized = useSelector(state => state.app.initialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])


    if (!initialized) {
        return <Preloader/>
    }

    return <App/>
}
export default compose(
    withRouter,
)(AppContainerWithHooks)
