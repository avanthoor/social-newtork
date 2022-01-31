import React from 'react';
import classes from './PostInfo.module.scss'
import LikeButton from "../../LikeButton/LikeButton";
import Views from "../../Views/Views";

function PostInfo(props: any) {
    return (
        <div className={classes.postInfo}>
            <div className={classes.likes}>
                <LikeButton/>
            </div>
            <div className={classes.views}>
                <Views count={100}/>
            </div>
        </div>
    );
}

export default PostInfo;