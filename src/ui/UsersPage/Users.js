import React from 'react';
import style from './Users.module.css';
import Search from '../common/Search/Search';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import User from './User/User';


export const Users = (props) => {
    return (
        <div className={style.main}>
            <h3>Users:</h3>
            <Search searchName={props.searchName}/>
            <Paginator
                nextPortion={props.nextPortion}
                prevPortion={props.prevPortion}
                firstPortion={props.firstPortion}
                portionSize={props.portionSize}
                portionNumber={props.portionNumber}
                currentPage={props.currentPage}
                totalItemsCount={props.totalItemsCount}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}/>
            {props.isFetching ? <Preloader/> :
                <div className={style.users}>
                    {props.users.map(u => {
                            return <User key={u.id}
                                         user={u}
                                         {...props}/>
                        }
                    )}
                </div>}
        </div>
    )
}

