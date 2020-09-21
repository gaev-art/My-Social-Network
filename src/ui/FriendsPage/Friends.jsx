import React from 'react';
import style from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem';
import PreloaderInit from '../common/Preloaders/PreloaderForInit';


export const Friends = (props) => {

    let friendsElement = props.friends.map(f => {
        return <FriendsItem
            key={f.id}
            friend={f}
            {...props}/>
    });

    return (
        <div className={style.main}>
            <h3>Friends:</h3>
            {props.loadingFriends ? <PreloaderInit/> : <div className={style.friend}>
                {friendsElement}
            </div>}
        </div>
    );
}

