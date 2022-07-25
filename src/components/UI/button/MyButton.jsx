import React from 'react';
import classes from './MyButton.module.scss'

const MyButton = (props) => {
    return (
        <button
            className={classes.myBtn}
            {...props}
        >
            {props.name}
        </button>
    );
};

export default MyButton;
