import React from 'react';
import s from './Preloader.module.css'

function Preloader(props) {
    return (
        <div className={s.main}>
            <h2>
                {/*<img src={preloader} className={s.preloader}/>*/}
                Loading</h2>

        </div>
    )
}

export default Preloader;