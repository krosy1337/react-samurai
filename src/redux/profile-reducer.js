const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_VALUE = 'CHANGE-NEW-POST-VALUE'

let startState = {
	posts: [
		{id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, veritatis.'},
		{id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta error expedita fugiat molestiae mollitia rem repellat ut. Ab aperiam consequuntur repudiandae! Aut cumque expedita laudantium nam sit. Hic, obcaecati pariatur!'},
		{id: 3, text: 'Короткий пост'},
	],
	newPostValue: '',
}

function profileReducer(state=startState, action) {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				text: state.newPostValue,
			}

			state.posts.push(newPost)
			state.newPostValue = ''
			return state

		case CHANGE_NEW_POST_VALUE:
			state.newPostValue = action.text
			return state

		default:
			return state
	}


}

export function addPostActionCreate() {
	return {type: ADD_POST}
}

export function changeNewPostValueActionCreate(text) {
	return {type: CHANGE_NEW_POST_VALUE, text: text}
}

export default profileReducer