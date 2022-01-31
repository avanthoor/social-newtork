import React from 'react';
import classes from './ButtonOutlined.module.scss'

type Props = {
    title: string
}

const ButtonOutlined: React.FC<Props> = (props) => (
    <button className={classes.buttonOutlined}>{props.title}</button>
);

export default ButtonOutlined;