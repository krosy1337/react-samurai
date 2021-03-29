import React from 'react'
import classes from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

function Dialogs(props) {
	return(
		<section className={classes.content}>
			<div className={classes.dialogs}>
				<ul className={classes.list}>
					{props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
				</ul>
			</div>
			<div className={classes.chat}>
				<ul className={classes.messages}>
					{props.state.messages.map(message => <Message text={message.text} self={message.self}/>)}
				</ul>
				<NewMessage newMessageValue={props.state.newMessageValue} dispatch={props.dispatch}/>
			</div>
		</section>
	)
}

export default Dialogs