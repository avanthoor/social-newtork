import React from 'react';
import classes from './Button.module.scss'

type Props = {
    title: string
}

const Button: React.FC<Props> = (props) => (
    <button className={classes.btn}>{props.title}</button>
);

export default Button;