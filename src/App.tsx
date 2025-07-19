import type { Component } from 'solid-js';
import style from "./App.module.css"

const App: Component = () => {
  return (
    <div id="app">
	<div id={style.container}>
		<div id={style.heading}>
			<img id={style.logo} src="http://localhost:8080/assets/logo.svg" />
			<div id={style.title}>Thothent</div>
		</div>
		<div id={style.input_container}>
			<img id={style.search_icon} src="http://localhost:8080/assets/search.svg" />
			<input id={style.input} placeholder="Enter your search..."/>
		</div>
	</div>
    </div>
  );
};

export default App;
