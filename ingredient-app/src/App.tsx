import React from 'react';
import './App.css';
import { searchByName } from './api/api';
import Button from './components/Button/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
const App = () => {
	const [search, setSearch] = React.useState('');
	const [results, setResults] = React.useState<any>([]);
	React.useEffect(() => {}, []);
	const handleSearch = async () => {
		const result = await searchByName(search);
		setResults(result.data?.meals);
	};
	return (
		<div className='App'>
			<input
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<Button> Search</Button>
			<button onClick={handleSearch}></button>
			<div>
				{results.length > 0 &&
					results.map((item: any) => {
						return (
							<div>
								<img src={item?.strMealThumb} alt={item?.strMeal} />
								<a href={item?.strYoutube}>{item?.strYoutube}</a>
								{item?.strInstructions}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default App;
