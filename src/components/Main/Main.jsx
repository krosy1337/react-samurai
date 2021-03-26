import React from 'react'
import classes from './Main.module.scss'
import {Route, BrowserRouter} from 'react-router-dom'

import Dialogs from "../Dialogs/Dialogs"
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import News from "../News/News"
import Music from "../Music/Music"
import Settings from "../Settings/Settings"

function Main() {
	return (
		<BrowserRouter>
			<main className={classes.main}>
				<Sidebar />
				<div className={classes.content}>
					<Route path='/profile' component={Profile}/>
					<Route path='/dialogs' component={Dialogs}/>
					<Route path='/news' component={News}/>
					<Route path='/music' component={Music}/>
					<Route path='/settings' component={Settings}/>
				</div>
			</main>
		</BrowserRouter>
	)
}

export default Main