import React from 'react'
import classes from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs(props) {
	return(
		<section className={classes.content}>
			<div className={classes.dialogs}>
				<ul className={classes.list}>
					{props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
				</ul>
			</div>
			<div className={classes.chat}>
				<ul className={classes.messages}>
					{props.messages.map(message => <Message text={message.text} />)}
				</ul>
			</div>
		</section>
	)
}

export default Dialogs