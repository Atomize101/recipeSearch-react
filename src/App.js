import React from 'react';
import './App.css';

const keys = require('./config/dev');

const App = () => {
	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${keys.APP_ID}&app_key=${keys.APP_KEY}`;

	return <div className="App">Testing</div>;
};

export default App;
