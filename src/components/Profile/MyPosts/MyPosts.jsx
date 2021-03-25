import React from 'react'
import classes from './MyPosts.module.scss'
import Post from "./Post/Post";

function MyPosts() {
	let name = 'Василий Уткин'
	return(
		<div className={classes.myPosts}>
			<Post name={name} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, veritatis."/>
			<Post name={name} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta error expedita fugiat molestiae mollitia rem repellat ut. Ab aperiam consequuntur repudiandae! Aut cumque expedita laudantium nam sit. Hic, obcaecati pariatur!"/>
			<Post name={name} text="Короткий пост"/>
		</div>
	)
}

export default MyPosts