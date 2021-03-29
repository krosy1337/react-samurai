import React from 'react'
import classes from './Message.module.scss'


function Message(props) {
	return(
		<li className={`${classes.message} ${props.self ? classes.me : ''}`}>
			<span className={classes.avatar}></span>
			<span className={classes.text}>{props.text}</span>
		</li>
	)
}

export default Message