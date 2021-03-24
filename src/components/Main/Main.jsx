import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import classes from './Main.module.scss'

function Main() {
	return (
		<main className={classes.main}>
			<Sidebar />
			<Profile />
		</main>
	)
}

export default Main