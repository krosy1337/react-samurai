import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

		this._state.profile = profileReducer(this._state.profile, action)
		this._state.dialogs = dialogsReducer(this._state.dialogs, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._rerender(this._state)

	},
}

export default store