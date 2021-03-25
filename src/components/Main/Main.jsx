import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import classes from './Main.module.scss'
import Dialogs from "../Dialogs/Dialogs";
import {Route, BrowserRouter} from 'react-router-dom'

function Main() {
	return (
		<BrowserRouter>
			<main className={classes.main}>
				<Sidebar />
				<div className={classes.content}>
					<Route path='/profile' component={Profile}/>
					<Route path='/dialogs' component={Dialogs}/>
				</div>
			</main>
		</BrowserRouter>
	)
}

export default Main