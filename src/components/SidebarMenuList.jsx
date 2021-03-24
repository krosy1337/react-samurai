import React from 'react'
import classes from './Sidebar.module.scss'

function SidebarList() {
	return(
		<ul className={classes.sidebar__list}>
			<li><a href="/" className={classes.sidebar__link}>Profile</a></li>
			<li><a href="/" className={classes.sidebar__link}>News</a></li>
			<li><a href="/" className={classes.sidebar__link}>Music</a></li>
			<li><a href="/" className={classes.sidebar__link}>Settings</a></li>
		</ul>
	)
}

export default SidebarList