import s from '../Profile.module.css';
import React from 'react';

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle} : </b><a href={contactValue}>{contactValue}</a>

    </div>

}