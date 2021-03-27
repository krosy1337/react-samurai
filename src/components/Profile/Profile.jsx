import React from 'react'
import classes from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
	return(
		<section>
			<div className={`${classes.imageContainer} ${classes.imageContainer_big}`}>
				<img src="https://wallpaperboat.com/wp-content/uploads/2020/06/05/44094/scenery-17.jpg" alt="someimage" className={classes.image}/>
			</div>
			<ProfileInfo />
			<MyPosts posts={props.posts}/>
		</section>
	)
}

export default Profile