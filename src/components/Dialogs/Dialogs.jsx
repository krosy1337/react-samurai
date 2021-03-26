import React from 'react'
import classes from './Dialogs.module.scss'
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

function Message(props) {
	return(
		<li className={classes.message}>{props.text}</li>
	)
}

function Dialogs(props) {
	return(
		<section className={classes.content}>
			<div className={classes.dialogs}>
				<ul className={classes.list}>
					<Dialog name="Иванёк" id="1"/>
					<Dialog name="Влад" id="2"/>
					<Dialog name="Годзилла" id="3"/>
					<Dialog name="Рыло" id="4"/>
					<Dialog name="Свин" id="5"/>

				</ul>
			</div>
			<div className={classes.chat}>
				<ul className={classes.messages}>
					<Message text="Hi"/>
					<Message text="Hi2"/>
					<Message text="Hi3"/>
				</ul>
			</div>
		</section>
	)
}

export default Dialogs