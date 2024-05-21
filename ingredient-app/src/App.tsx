import React from 'react';
import './App.css';
import { Button } from './components/button/button';
import axios from 'axios';
import { Cards } from './components/Cards/Cards';
const App = () => {
	const [count, setCount] = React.useState(0);
	const [todos, setTodos] = React.useState<any>([]);
	const [isLoading, setIsloading] = React.useState(false);
	const [page, setPage] = React.useState(1);
	const limit = 10;
	const [startRow, setStartRow] = React.useState(0);
	const [endRow, setEndRow] = React.useState(startRow + 10);
	const [length, setLength] = React.useState(0);

	const url = 'https://dummyjson.com/todos';

	
React.useEffect(() => {
		setIsloading(true);
		axios(url)
			.then((res) => {
				setIsloading(false);
				setLength(res.data.todos.length);
				setTodos(res.data.todos.slice(startRow, endRow));
			})
			.catch((err) => {
				setIsloading(false);
			});
	}, [page, startRow, endRow]);
	const getChildData = (data: number) => {
		console.log(data, setCount);
		// setCount(data);
	};
	const x = ['1', '2'];
	console.log(
		todos
			.map((todo: any) => todo)
			.sort((a: any, b: any) => {
				return b.todo - a.todo;
			})
	);

	const clickHandler = () => {
		if (endRow >= length) {
			return;
		}
		setPage(page + 1);
		setStartRow(startRow + 10);
		setEndRow(endRow + 10);
	};

	const prevHandler = () => {
		if (startRow === 0) {
			return;
		}
		setPage(page - 1);
		setStartRow(startRow - 10);
		setEndRow(endRow - 10);
	};

	return (
		<div className='App'>
			{/* <h1>Ingredient App {count}</h1> */}

			{isLoading && <div className='loader'></div>}
			{todos.map((todo: any) => {
				return <Cards todoName={todo.todo} />;
			})}
			<Button count={count} getChildData={getChildData} />
			<button onClick={clickHandler}>Next ({page}) </button>
			<button onClick={prevHandler}>Pre ({page})</button>
			<h1>Page Count{length}</h1>
		</div>
	);
};

export default App;
