import React from 'react'
import classes from './NewPost.module.scss'
import {addPostActionCreate, changeNewPostValueActionCreate} from "../../../redux/state";





function NewPost(props) {

	let newPostArea = React.createRef()

	function handleClick() {
		props.dispatch(addPostActionCreate())
	}

	function handleChange(el) {
		let text = el.current.value
		props.dispatch(changeNewPostValueActionCreate(text))
	}

	return(
		<div className={classes.newPost}>
			<textarea
				className={classes.input}
				ref={newPostArea}
				value={props.newPostValue}
				onChange={() => handleChange(newPostArea)} />
			<button
				className={classes.button}
				onClick={() => handleClick(newPostArea)}>Опубликовать</button>
		</div>
	)
}

export default NewPost