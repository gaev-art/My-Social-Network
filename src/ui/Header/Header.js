import React from 'react';
import logo from '../../img/logo.png'
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={logo} alt={''}/>
            <div className={style.loginBlock}>

                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div> :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}