import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
	{id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, veritatis.'},
	{id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta error expedita fugiat molestiae mollitia rem repellat ut. Ab aperiam consequuntur repudiandae! Aut cumque expedita laudantium nam sit. Hic, obcaecati pariatur!'},
	{id: 3, text: 'Короткий пост'},
]

let dialogsData = [
	{id: 1, name: 'Иванёк'},
	{id: 2, name: 'Влад'},
	{id: 3, name: 'Годзилла'},
	{id: 4, name: 'Рыло'},
	{id: 5, name: 'Свин'},
]

let messagesData = [
	{id: 1, text: 'Hi'},
	{id: 2, text: 'Hi2'},
	{id: 3, text: 'Hi3'},
]

ReactDOM.render(
	<React.StrictMode>
		<App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
