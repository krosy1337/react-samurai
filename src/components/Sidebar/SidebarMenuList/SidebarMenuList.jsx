import React from 'react'
import classes from './SidebarMenuList.module.scss'
import {NavLink} from "react-router-dom";

function SidebarList(props) {
	return(
		<ul className={classes.list}>
			{props.links.map(link => {
				return(
				<li>
					<NavLink to={link.url}
							 className={classes.link}
							 activeClassName={classes.active}>
						{link.text}
					</NavLink>
				</li>
				)
			})}
			<li>
				<NavLink to="/friends" className={`${classes.title} ${classes.link}`} activeClassName={classes.active}>Друзья</NavLink>
				<div className={classes.friends}>
					<div className={classes.friend}>
						<div className={classes.avatar}></div>
						<span className={classes.name}>Слон</span>
					</div>
					<div className={classes.friend}>
						<div className={classes.avatar}></div>
						<span className={classes.name}>Балон</span>
					</div>
					<div className={classes.friend}>
						<div className={classes.avatar}></div>
						<span className={classes.name}>Рулон</span>
					</div>
				</div>
			</li>
		</ul>
	)
}

export default SidebarList