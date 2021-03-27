import React from 'react'
import classes from './../Dialogs.module.scss'


function Message(props) {
	return(
		<li className={classes.message}>{props.text}</li>
	)
}

export default Message