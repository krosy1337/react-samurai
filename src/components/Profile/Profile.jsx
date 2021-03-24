import React from 'react'
import classes from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
	return(
		<section className={classes.content}>
			<div className={`${classes.content__imageContainer} ${classes.content__imageContainer_big}`}>
				<img src="https://wallpaperboat.com/wp-content/uploads/2020/06/05/44094/scenery-17.jpg" alt="someimage" className={classes.content__image}/>
			</div>
			<MyPosts />
		</section>
	)
}

export default Profile