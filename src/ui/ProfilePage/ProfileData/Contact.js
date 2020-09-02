import s from '../Profile.module.css';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WebIcon from '@material-ui/icons/Web';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Contact = ({contactTitle, contactValue}) => {

    // if (contactValue !== '') {
    //     if (contactTitle === 'facebook') {
    //         contactTitle = <FacebookIcon color={'inherit'}/>
    //     } else if (contactTitle === 'twitter') {
    //         contactTitle = <TwitterIcon color={'inherit'}/>
    //     } else if (contactTitle === 'website') {
    //         contactTitle = <WebIcon color={'inherit'}/>
    //     } else if (contactTitle === 'instagram') {
    //         contactTitle = <InstagramIcon color={'inherit'}/>
    //     } else if (contactTitle === 'youtube') {
    //         contactTitle = <YouTubeIcon color={'inherit'}/>
    //     }else if (contactTitle === 'github') {
    //         contactTitle = <GitHubIcon color={'inherit'}/>
    //     }else if (contactTitle === 'vk') {
    //         contactTitle = 'vk'
    //     } else if (contactTitle === 'mainLink') {
    //         contactTitle = 'mainLink'
    //     }
    // }
    //
    return <div className={s.contact}>
        <b>{contactTitle} : </b><a href={contactValue}>{contactValue}</a>

    </div>



    // return <div className={s.contact}>
    //     <a href = {`${contactValue}`} style={{textDecoration: 'none', color:'black'}}>
    //         {contactTitle}
    //     </a>
    // </div>

}