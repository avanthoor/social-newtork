import React from 'react';
import classes from './Post.module.scss'
import CommentInput from "../CommentInput/CommentInput";
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import PostInfo from "./PostInfo/PostInfo";

const Post: React.FC = (props) => (
    <div className={classes.postContainer}>
        <div className={classes.header}>
            <PostHeader/>
        </div>

        <div className={classes.line}></div>

        <div className={classes.content}>
            <PostContent/>
        </div>

        <div className={classes.info}>
            <PostInfo/>
        </div>

        <div className={classes.comments}>
            <CommentInput/>
        </div>
    </div>
);

export default Post;