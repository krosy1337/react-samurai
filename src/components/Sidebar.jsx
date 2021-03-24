import React from 'react'
import SidebarList from "./SidebarMenuList";
import classes from './Sidebar.module.scss'


function Sidebar() {
	return(
		<aside className={classes.sidebar}>
			<nav className="sidebar__nav">
				<SidebarList />
			</nav>
		</aside>
	)
}

export default Sidebar