import style from './ProfileData.module.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';

export const Contact = ({contactTitle, contactValue}) => {

    if (contactValue !== '') {
        if (contactTitle === 'facebook') {
            contactTitle = <FontAwesomeIcon icon={faFacebook} size='2x'/>
        } else if (contactTitle === 'twitter') {
            contactTitle = <FontAwesomeIcon icon={faTwitter} size='2x'/>
        } else if (contactTitle === 'website') {
            contactTitle = <FontAwesomeIcon icon={faAddressCard} size='2x'/>
        } else if (contactTitle === 'instagram') {
            contactTitle = <FontAwesomeIcon icon={faInstagram} size='2x'/>
        } else if (contactTitle === 'youtube') {
            contactTitle = <FontAwesomeIcon icon={faYoutube} size='2x'/>
        } else if (contactTitle === 'github') {
            contactTitle = <FontAwesomeIcon icon={faGithub} size='2x'/>
        } else if (contactTitle === 'vk') {
            contactTitle = <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
        } else if (contactTitle === 'mainLink') {
            contactTitle = <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
        }
    }

    return <a href={`${contactValue}`} className={style.root}>
        {contactValue !== '' && contactTitle}
    </a>

};