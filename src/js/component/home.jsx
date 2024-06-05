import React, { useEffect, useState } from "react";


//create your first component
const Home = () => {

	const getTodosURL = "https://playground.4geeks.com/todo/users/diazmoraj"
	const addTodosURL = "https://playground.4geeks.com/todo/todos/diazmoraj"
	const [todos, setTodos] = useState([])

	useEffect(() => {
		fetch(getTodosURL)
		.then(response => response.json())
		.then(data => {setTodos(data.todos)})
		.catch((error) => {error})
	}, [])
	
	let newTodo ={
		"label": "jugar bola"
	}

	function addTodos() {
		fetch(addTodosURL, {
			method: "POST",
			body: JSON.stringify(newTodo),
			headers: {'Content-type': 'application/json'}
		})
		.then(response=>response.json())
		.then(data=> console.log(data))
		.catch((error) => (error))
	}
	
	return (
		<div className="text-center">
			<h1>TO DO's</h1>
			{todos.map((value, index) => {
				return <h3 key={index}>{value.label}</h3>
			})}
		</div>
	);
};

export default Home;
