const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_VALUE = 'CHANGE-NEW-MESSAGE-VALUE'

let startState = {
		dialogs: [
			{id: 1, name: 'Иванёк'},
			{id: 2, name: 'Влад'},
			{id: 3, name: 'Годзилла'},
			{id: 4, name: 'Рыло'},
			{id: 5, name: 'Свин'},
		],
		messages: [
			{id: 1, text: 'Hi'},
			{id: 2, text: 'Hi2', self: true},
			{id: 3, text: 'Hi3'},
		],
		newMessageValue: '',
	}


function dialogsReducer(state=startState, action) {

	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				text: state.newMessageValue,
				self: true,
			}

			state.messages.push(newMessage)
			state.newMessageValue = ''
			return state

		case CHANGE_NEW_MESSAGE_VALUE:
			state.newMessageValue = action.text
			return state

		default:
			return state
	}


}

export function addMessageActionCreate() {
	return {type: ADD_MESSAGE}
}

export function changeNewMessageValueActionCreate(text) {
	return {type: CHANGE_NEW_MESSAGE_VALUE, text: text}
}

export default dialogsReducer