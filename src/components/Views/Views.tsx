import React from 'react';
import classes from './Views.module.scss'

type Props = {
    count: number
}

const Views: React.FC<Props> = (props) => (
    <span className={classes.views}>{props.count} views</span>
);

export default Views;