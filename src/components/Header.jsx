import React from 'react'
import logo from "../logo.svg";

function Header() {
	return(
		<header className="header">
			<div className="container header__container">
				<img src={logo} alt="logo" className="header__logo"/>
			</div>
		</header>
	)
}

export default Header