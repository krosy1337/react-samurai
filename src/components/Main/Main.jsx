import React from 'react'
import classes from './Main.module.scss'
import {Route, BrowserRouter} from 'react-router-dom'

import Dialogs from "../Dialogs/Dialogs"
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import News from "../News/News"
import Music from "../Music/Music"
import Settings from "../Settings/Settings"

function Main(props) {
	return (
		<BrowserRouter>
			<main className={classes.main}>
				<Sidebar state={props.state.sidebar}/>
				<div className={classes.content}>
					<Route path='/profile' render={() => <Profile state={props.state.profile}
																  dispatch={props.dispatch}/>} />
					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogs}
																  dispatch={props.dispatch}/>}/>
					<Route path='/news' render={() => <News />}/>
					<Route path='/music' render={() => <Music />}/>
					<Route path='/settings' render={() => <Settings />}/>
				</div>
			</main>
		</BrowserRouter>
	)
}

export default Main