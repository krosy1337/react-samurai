import React from 'react'
import classes from './NewMessage.module.scss'
import {addMessageActionCreate, changeNewMessageValueActionCreate} from "../../../redux/dialogs-reducer";


function NewMessage(props) {

	let newMessageArea = React.createRef()

	function handleClick() {
		props.dispatch(addMessageActionCreate())
	}

	function handleChange(el) {
		let text = el.current.value
		props.dispatch(changeNewMessageValueActionCreate(text))
	}

	return(
		<div className={classes.newMessage}>
			<textarea className={classes.input}
					  ref={newMessageArea}
					  value={props.newMessageValue}
					  onChange={() => handleChange(newMessageArea)} />
			<button className={classes.button} onClick={() => handleClick(newMessageArea)}>Отправить</button>
		</div>
	)
}

export default NewMessage