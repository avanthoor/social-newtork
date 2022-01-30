import { PictureOutlined } from '@ant-design/icons';
import React from 'react';
import classes from './AddPostTextArea.module.css'


function AddPostTextArea(props: any) {
    return (
        <div className={classes.textAreaWrapper}>
            <textarea className={classes.textArea} placeholder='Add note...'/>
            <PictureOutlined className={classes.picture} />
        </div>
    );
}

export default AddPostTextArea;