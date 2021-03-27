import React from 'react'
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";

function MyPosts(props) {
	let name = 'Василий Уткин'

	return(
		<div className={classes.myPosts}>
			{props.posts.map(post => <Post name={name} text={post.text}/>)}
		</div>
	)
}

export default MyPosts