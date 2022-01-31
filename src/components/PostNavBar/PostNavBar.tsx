import React from 'react';
import {SearchOutlined} from "@ant-design/icons";
import Button from "../Button/Button";
import classes from './PostNavBar.module.scss'

function PostNavBar(props: any) {
    return (
        <div className={classes.postNavBar}>
            <SearchOutlined className={classes.searchPost}/>
            <Button title='Photos'/>
            <Button title='Videos'/>
            <Button title='Friends'/>
            <Button title='Recommendation'/>
            <Button title='Sort by rating'/>
        </div>
    );
}

export default PostNavBar;