import React, { useEffect, useState } from 'react';
import './App.css';

const keys = require('./config/dev');

const App = () => {
	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${keys.APP_ID}&app_key=${keys.APP_KEY}`;

	const [counter, setCounter] = useState(0);

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
		</div>
	);
};

export default App;
