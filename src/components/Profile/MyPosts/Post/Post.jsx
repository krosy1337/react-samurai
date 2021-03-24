import React from 'react'
import classes from './Post.module.scss'

function Post() {
	return(
		<div className={classes.post}>
			<div className={classes.text}>
				Текст поста
			</div>
		</div>
	)
}

export default Post