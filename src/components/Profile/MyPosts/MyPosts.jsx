import React from 'react'
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";

function MyPosts() {
	return(
		<div className={classes.myPosts}>
			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default MyPosts