import React from 'react';
import pic from "../../../static/Rectangle 102.svg";
import {MoreOutlined} from "@ant-design/icons";
import classes from './PostHeader.module.scss'

function PostHeader(props:any) {
    return (
        <div className={classes.postHeader}>
            <div className={classes.sendInfo}>
                <div className={classes.ava}>
                    <img src={pic} alt=""/>
                </div>
                <div className={classes.fullNameAndHowLong}>
                    <h2 className={classes.fullName}>Vasily Popov</h2>
                    <span className={classes.howLongAgo}>13 minutes ago</span>
                </div>
            </div>
            <MoreOutlined className={classes.options} rotate={90}/>
        </div>
    );
}

export default PostHeader;