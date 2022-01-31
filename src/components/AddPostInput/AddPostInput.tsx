import { PictureOutlined, SoundOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import classes from './AddPostInput.module.scss'


const AddPostInput: React.FC = (props) => {
    const [inputText, setInputText] = useState('')

    const onInputTextChange = (e: any) => {
        setInputText(e.currentTarget.value)
    }

    return (
        <div className={classes.textAreaWrapper}>
            <textarea value={inputText} onChange={onInputTextChange} className={classes.textArea} placeholder='Add note...'/>
            <div className={classes.icons}>
                <PictureOutlined className={classes.picture} />
                <VideoCameraOutlined />
                <SoundOutlined />
            </div>
        </div>
    );
};

export default AddPostInput;