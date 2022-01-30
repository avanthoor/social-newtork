import React from 'react';
import classes from './SearchInput.module.scss'

function SearchInput(props: any) {
    return (
        <input className={classes.input} placeholder='Search...' type="search"/>
    );
}

export default SearchInput;





