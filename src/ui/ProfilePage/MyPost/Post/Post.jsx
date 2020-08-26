import React from 'react';
import s from './Post.module.css'

const Post = (props) => {



    return (
        <div className={s.item}>
            <div className={s.Btn}>
                <button onClick={()=>{props.deletePost(props.post.id)}}>x</button>
            </div>
            <div>
                <img src={props.photo}/>
                <span className={s.text}><b>{props.fullName} : </b>{props.post.message}</span>
            </div>
            <div className={s.mainLike}>
                <span className={s.like}>like {props.post.likeCounts}</span>
            </div>
        </div>

    )
}

export default Post;