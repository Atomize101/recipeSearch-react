import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const keys = require('./config/dev');

const App = () => {
	const [recipes, setRecipies] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${keys.APP_ID}&app_key=${keys.APP_KEY}`
		);
		const data = await response.json();
		setRecipies(data.hits);
		console.log(data.hits);
	};

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			{recipes.map((recipe) => (
				<Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
			))}
		</div>
	);
};

export default App;
