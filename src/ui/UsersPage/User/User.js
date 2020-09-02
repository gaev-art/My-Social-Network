import React from 'react';
import style from '../Users.module.css'
import ava from '../../../img/ava.png'
import {useHistory} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        height: 100,
    }
}));

const User = (props) => {

    let history = useHistory();

    const classes = useStyles();
    return (

        <React.Fragment>
            <ListItem className={classes.root} onClick={()=>{history.push(`/profile/${props.user.id}`)}} button>
                <ListItemAvatar>
                    <img alt="Profile Picture"
                         src={props.user.photos.small != null ? props.user.photos.small : ava} className={style.img}/>
                </ListItemAvatar>
                <ListItemText style={{padding: '10px'}} primary={props.user.name} />
                {props.user.followed
                                 ? <RemoveIcon
                                     disabled={props.followingInProgress
                                         .some(id => id === props.user.id)}
                                     onClick={() => {
                                         props.unFollow(props.user.id)
                                     }}>
                                     UnFollow
                                 </RemoveIcon>
                                 : <AddIcon
                                     disabled={props.followingInProgress
                                         .some(id => id === props.user.id)}
                                     onClick={() => {
                                         props.follow(props.user.id)
                                     }}>
                                     Follow
                                 </AddIcon>}
            </ListItem>
        </React.Fragment>


        // <div className={style.user} style={{'margin': '30px'}}>
        //     <span>
        //         <div>
        //             <NavLink to={`/profile/${props.user.id}`}>
        //             <img
        //                 alt=''
        //                 src={props.user.photos.small != null
        //                     ? props.user.photos.small : ava}
        //                 className={style.img}/>
        //             </NavLink>
        //         </div>
        //         <div>
        //             {props.user.followed
        //                 ? <button
        //                     disabled={props.followingInProgress
        //                         .some(id => id === props.user.id)}
        //                     onClick={() => {
        //                         props.unFollow(props.user.id)
        //                     }}>
        //                     UnFollow
        //                 </button>
        //                 : <button
        //                     disabled={props.followingInProgress
        //                         .some(id => id === props.user.id)}
        //                     onClick={() => {
        //                         props.follow(props.user.id)
        //                     }}>
        //                     Follow
        //                 </button>}
        //         </div>
        //     </span>
        //     <span>
        //         <span>
        //             <div>
        //                 <h6>{props.user.name}</h6>       {/*добавить размер шрифта*/}
        //             </div>
        //             {/*<div>*/}
        //             {/*<b>Status : </b>{props.user.status || 'No status'}*/}
        //             {/*</div>*/}
        //         </span>
        //     </span>
        // </div>
    )
}


export default User;

