import React from 'react'
import classes from './ProfileInfo.module.scss'

function ProfileInfo() {
	return(
		<div className={classes.info}>
			<div className={classes.avatar}></div>
			<span className={classes.name}>Василий Уткин</span>
		</div>
	)
}

export default ProfileInfo