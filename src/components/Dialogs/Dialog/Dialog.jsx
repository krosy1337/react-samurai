import React from 'react'
import classes from './Dialog.module.scss'
import {NavLink} from "react-router-dom";

function Dialog(props) {
	return(
		<li>
			<NavLink to={"/dialogs/"+props.id} className={classes.dialog}>
				<div className={classes.avatar}></div>
				<span className={classes.name}>{props.name}</span>
			</NavLink>
		</li>
	)
}

export default Dialog