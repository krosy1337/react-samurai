import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<Main state={props.state} dispatch={props.dispatch}/>
		</div>
	);
}

export default App;
