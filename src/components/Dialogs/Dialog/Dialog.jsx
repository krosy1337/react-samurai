import React from 'react'
import classes from './../Dialogs.module.scss'
import {NavLink} from "react-router-dom";

function Dialog(props) {
	return(
		<li>
			<NavLink to={"/dialogs/"+props.id} className={classes.dialog}>
				<div className={classes.dialog__avatar}></div>
				<span className={classes.dialog__name}>{props.name}</span>
			</NavLink>
		</li>
	)
}

export default Dialog