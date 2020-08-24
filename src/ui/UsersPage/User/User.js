import React from 'react';
import style from '../Users.module.css'
import ava from '../../../img/ava.png'
import {NavLink} from 'react-router-dom';

const User = (props) => {
    return (
        <div className={style.user} style={{'margin': '30px'}}>
            <span>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}>
                    <img
                        src={props.user.photos.small != null
                            ? props.user.photos.small : ava}
                        className={style.img}/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed
                        ? <button
                            disabled={props.followingInProgress
                                .some(id => id === props.user.id)}
                            onClick={() => {
                                props.unFollow(props.user.id)
                            }}>
                            UnFollow
                        </button>
                        : <button
                            disabled={props.followingInProgress
                                .some(id => id === props.user.id)}
                            onClick={() => {
                                props.follow(props.user.id)
                            }}>
                            Follow
                        </button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                     <b>Name : </b>{props.user.name}
                    </div>
                    <div>
                    <b>Status : </b>{props.user.status || 'No status'}
                    </div>
                </span>
            </span>
        </div>
    )
}


export default User;

