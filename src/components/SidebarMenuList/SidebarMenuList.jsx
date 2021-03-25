import React from 'react'
import classes from '../Sidebar/Sidebar.module.scss'
import {NavLink} from "react-router-dom";

function SidebarList() {
	return(
		<ul className={classes.sidebar__list}>
			<li><NavLink to="/profile" className={classes.sidebar__link} activeClassName={classes.active}>Профиль</NavLink></li>
			<li><NavLink to="/dialogs" className={classes.sidebar__link} activeClassName={classes.active}>Сообщения</NavLink></li>
			<li><NavLink to="/news" className={classes.sidebar__link} activeClassName={classes.active}>Новости</NavLink></li>
			<li><NavLink to="/music" className={classes.sidebar__link} activeClassName={classes.active}>Музыка</NavLink></li>
			<li><NavLink to="/settings" className={classes.sidebar__link} activeClassName={classes.active}>Настройки</NavLink></li>
		</ul>
	)
}

export default SidebarList