import React from 'react';
import classes from './NewsPage.module.scss'
import Post from "../Post/Post";
import SearchInput from "../SearchInput/SearchInput";
import AddPostTextArea from "../AddPostTextArea/AddPostTextArea";

function NewsPage(props: any) {
    return (
        <div className={classes.newsPageContainer}>
            <div className={classes.newsPage}>
                <div className={classes.newsHeader}>
                    <h1>Good morning, Alina! What's new?</h1>
                    <div>
                        <SearchInput/>
                    </div>
                </div>
                <div className={classes.AddPostTextArea}>
                    <AddPostTextArea/>
                </div>
                <Post/>
            </div>
        </div>
    );
}

export default NewsPage;