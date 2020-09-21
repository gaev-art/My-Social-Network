import React from 'react';
import style from './Preloader.module.css'
import preloader from '../../../img/preloader.gif'

function Preloader() {
    return (
        <div className={style.main}>
            <h2>
                <img alt='' src={preloader} className={style.preloader}/>
                Loading</h2>

        </div>
    )
}

export default Preloader;