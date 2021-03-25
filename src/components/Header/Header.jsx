import React from 'react'
import logo from "../../logo.svg";
import classes from './Header.module.scss'

function Header() {
	return(
		<header className={classes.header}>
			<div className={`${classes.header__container} container`}>
				<img src={logo} alt="logo" className={classes.header__logo}/>
			</div>
		</header>
	)
}

export default Header