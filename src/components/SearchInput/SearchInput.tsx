import React, {useState} from 'react';
import classes from './SearchInput.module.scss'

function SearchInput(props: any) {
    const [inputText, setInputText] = useState('')

    const onTextChange = (e: any) => {
        setInputText(e.currentTarget.value)
    }

    return (
        <input value={inputText} onChange={onTextChange} className={classes.input} placeholder='Search...' type="search"/>
    );
}

export default SearchInput;





