import React from 'react'
import classes from './Post.module.scss'

function Post(props) {
	return(
		<div className={classes.post}>
			<div className={classes.userInfo}>
				<div className={classes.avatar}/>
				<span className={classes.name}>{props.name}</span>
			</div>
			<div className={classes.text}>
				{props.text}

			</div>
		</div>
	)
}

export default Post