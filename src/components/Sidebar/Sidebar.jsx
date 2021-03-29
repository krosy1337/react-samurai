import React from 'react'
import SidebarList from "./SidebarMenuList/SidebarMenuList";
import classes from './Sidebar.module.scss'


function Sidebar(props) {
	return(
		<aside className={classes.sidebar}>
			<nav className="sidebar__nav">
				<SidebarList links={props.state.sidebarList}/>
			</nav>
		</aside>
	)
}

export default Sidebar