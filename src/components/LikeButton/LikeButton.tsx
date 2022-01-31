import React, {useRef, useState} from 'react';
import classes from './LikeButton.module.scss'
import {LikeOutlined} from "@ant-design/icons";

function LikeButton(props: any) {
    const [likes, setLikes] = useState(5)
    const [isClicked, setIsClicked] = useState(false)

    const addLike = () => {
        setLikes((likes) => {
            return  isClicked ? likes - 1 : likes + 1
        })
        setIsClicked(isClicked => !isClicked)
    }

    return (
        <div className={classes.likeButton}>
            <LikeOutlined className={classes.likeIcon} onClick={addLike}/>
            <span className={classes.likesCounter}>{likes}</span>
        </div>
    );
}

export default LikeButton;