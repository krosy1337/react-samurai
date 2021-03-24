import React from 'react'
import SidebarList from "./SidebarMenuList";


function Sidebar() {
	return(
		<aside className="sidebar">
			<nav className="sidebar__nav">
				<SidebarList />
			</nav>
		</aside>
	)
}

export default Sidebar