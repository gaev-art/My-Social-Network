import React from 'react';
import style from './App.module.css';
import {Navbar} from './Navbar/NavBar';
import {Route, Switch} from 'react-router-dom';
import {Friends} from './FriendsPage/Friends';
import {Dialogs} from './DialogsPage/Dialogs';
import {Profile} from './ProfilePage/Profile';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import {Users} from './UsersPage/Users';

function App() {
    return (
        <div className={style.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={style.appWrapperContent}>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <Profile/>}/>
                    <Route path='/users/:userId?' render={() => <Users/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
