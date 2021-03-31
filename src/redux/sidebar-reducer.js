let startState =  {
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
}

function sidebarReducer(state=startState, action) {
	return state
}

export default sidebarReducer