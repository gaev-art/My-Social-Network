import React from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../bll/authReducer';
import {Redirect} from 'react-router-dom';
import style from './Login.module.css'


function Login(props) {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={style.main}>
            <h3>For test use:</h3>
            <div>Email: <strong>free@samuraijs.com</strong></div>
            <div>Password: <strong>free</strong></div>

            <h1>Login</h1>
            <LoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})


export default connect(mapStateToProps, {login})(Login);