import { SendOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import classes from './CommentInput.module.scss'

function CommentInput(props: any) {
    const [postText, setPostText] = useState('')

    const onPostChange = (e: any) => {
        setPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.commentInputWrapper}>
            <textarea onChange={onPostChange} className={classes.commentInput} value={postText} placeholder='Add a comment'/>
            <div className={classes.icons}>
                <SendOutlined className={classes.icon}/>
            </div>
        </div>
    );
}

export default CommentInput;