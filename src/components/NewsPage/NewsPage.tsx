import React from 'react';
import classes from './NewsPage.module.scss'
import Post from "../Post/Post";
import SearchInput from "../SearchInput/SearchInput";
import AddPostInput from "../AddPostInput/AddPostInput";
import PostNavBar from "../PostNavBar/PostNavBar";

const NewsPage: React.FC = (props) => (
    <div className={classes.newsPage}>
        <div className={classes.newsHeader}>
            <h1>Good morning, Alina! What's new?</h1>
            <div>
                <SearchInput/>
            </div>
        </div>
        <div className={classes.addPostInput}>
            <AddPostInput/>
        </div>
        <div className={classes.postNavBar}>
            <PostNavBar/>
        </div>
        <div className={classes.posts}>
            <Post/>
            <Post/>
        </div>
    </div>
);

export default NewsPage;