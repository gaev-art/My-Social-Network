import React from 'react';
import style from './App.module.css';
import {Navbar} from './Navbar/NavBar';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Friends} from './FriendsPage/Friends';
import {Dialogs} from './DialogsPage/Dialogs';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import ProfileContainer from './ProfilePage/ProfileContainer';
import UsersContainer from './UsersPage/UsersContainer';

function App() {
    return (
        <div className={style.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={style.appWrapperContent}>
                <Switch>
                    <Route exact path='/' render={() => <Redirect from="/" to="/profile"/>}/>
                    <Route path='/profile/:userId?' render={(props) =>
                        <ProfileContainer userId={props.match.params.userId}/>}/>
                    <Route path='/users/:userId?' render={() => <UsersContainer/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
