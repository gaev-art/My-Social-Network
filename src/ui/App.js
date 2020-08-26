import React from 'react';
import style from './App.module.css';
import {Navbar} from './Navbar/NavBar';
import {Redirect, Route, Switch} from 'react-router-dom';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import ProfileContainer from './ProfilePage/ProfileContainer';
import UsersContainer from './UsersPage/UsersContainer';
import FriendsContainer from './FriendsPage/FriendsContainer';
import DialogsContainer from './DialogsPage/DialogsContainer';

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
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/login' render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
