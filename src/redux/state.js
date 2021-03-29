const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_VALUE = 'CHANGE-NEW-POST-VALUE'

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_VALUE = 'CHANGE-NEW-MESSAGE-VALUE'

let store = {
	_state: {
		profile: {
			posts: [
				{id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, veritatis.'},
				{id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta error expedita fugiat molestiae mollitia rem repellat ut. Ab aperiam consequuntur repudiandae! Aut cumque expedita laudantium nam sit. Hic, obcaecati pariatur!'},
				{id: 3, text: 'Короткий пост'},
			],
			newPostValue: '',
		},
		dialogs: {
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
		},
		sidebar: {
			sidebarList: [
				{id: 1, text: 'Профиль', url: '/profile',},
				{id: 2, text: 'Сообщения', url: '/dialogs',},
				{id: 3, text: 'Новости', url: '/news',},
				{id: 4, text: 'Музыка', url: '/music',},
				{id: 5, text: 'Настройки', url: '/settings',},
			],
			friends: {
				text: 'Друзья',
				friends: [
					{id: 1, name: 'Свин'},
					{id: 2, name: 'Рога'},
					{id: 3, name: 'Копыта'},
				],
			},
		},
	},
	get state() {
		return this._state
	},

	_rerender() {},

	subscribe(observer) {
		this._rerender = observer
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 4,
				text: this._state.profile.newPostValue,
			}

			this._state.profile.posts.push(newPost)
			this._state.profile.newPostValue = ''

			this._rerender(this._state)
		} else if (action.type === CHANGE_NEW_POST_VALUE) {
			this._state.profile.newPostValue = action.text

			this._rerender(this._state)
		} else if (action.type === ADD_MESSAGE) {

			let newMessage = {
				id: 4,
				text: this._state.dialogs.newMessageValue,
				self: true,
			}

			this._state.dialogs.messages.push(newMessage)
			this._state.dialogs.newMessageValue = ''

			this._rerender(this._state)

		} else if (action.type === CHANGE_NEW_MESSAGE_VALUE) {
			this._state.dialogs.newMessageValue = action.text

			this._rerender(this._state)
		}
	},
}

export function addPostActionCreate() {
	return { type: ADD_POST }
}
export function changeNewPostValueActionCreate(text) {
	return { type: CHANGE_NEW_POST_VALUE, text: text }
}

export function addMessageActionCreate() {
	return { type: ADD_MESSAGE }
}
export function changeNewMessageValueActionCreate(text) {
	return { type: CHANGE_NEW_MESSAGE_VALUE, text: text }
}

export default store