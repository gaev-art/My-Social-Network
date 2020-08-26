import React from 'react';
import s from './Post.module.css'

const Post = (props) => {



    return (
        <div className={s.item}>
            <div className={s.Btn}>
                <button onClick={()=>{props.deletePost(props.id)}}>x</button>
            </div>
            <div>
                <img src={props.photo}/>
                <span className={s.text}>{props.message}</span>
            </div>
            <div className={s.mainTime}>
                <p className={s.time}>{props.date}</p>
            </div>
            <div className={s.mainLike}>
                <span className={s.like}>like {props.likeCounts}</span>
            </div>
        </div>

    )
}

export default Post;