import React, { useEffect, useState } from "react";


//create your first component
const Home = () => {

	const getTodosURL = "https://playground.4geeks.com/todo/users/diazmoraj"
	const addTodosURL = "https://playground.4geeks.com/todo/todos/diazmoraj"
	const delTodosURL = `https://playground.4geeks.com/todo/todos/${id}`
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	function getTodos() {
		fetch(getTodosURL)
		.then(response => response.json())
		.then(data => {setTodos(data.todos)})
		.catch((error) => {error})
	}

	useEffect(() => {
		getTodos()
	}, [])
	
	function addTodos() {
		//let newTodo ={
		//}
		fetch(addTodosURL, {
			method: "POST",
			body: JSON.stringify({"label": inputValue}),
			headers: {'Content-type': 'application/json'}
		})
		.then(response=>response.json())
		.then(data=> {setTodos(data.todos)})
		.catch((error) => (error))
	}

	function delTodos(){
		fetch(delTodosURL, {
			method: "DELETE",
			body: JSON.stringify(setTodos),
			headers: {'Content-type': 'application/json'}
		})
		.then(response=>response.json())
		.then (() => {
			setTodos((getTodos) => getTodos.filter((todos) => todos.id !== id));
		})
		.catch((error) => (error))
	}
	
	return (
		<div className="text-center">
			<h1>TO DO's</h1>
			<input
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(enter) => {
					if (enter.key == "Enter"){
						if
							(inputValue.trim() !==""){
								setTodos(todos.concat([inputValue.trim()]));
								setInputValue("");
								addTodos();
								getTodos();
							}
						}
					}}
						placeholder="What do you need to do"></input>
			{todos.map((value, index) => {
				return (<h3 key={index}>{value.label}</h3>);
				<button className="btn btn-danger" onClick={() => delTodos(value.id)}>Delete</button>
			})}
		</div>
	);
};

export default Home;
