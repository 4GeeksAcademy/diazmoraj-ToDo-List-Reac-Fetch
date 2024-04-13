import React, { useState } from "react";


//create your first component
const Home = () => {

	const todosURL = "https://playground.4geeks.com/todo/"
	const [todos, setTodos] = useState([])
	
	// obtener lista de todos
	function getTodos () {

		fetch(todosURL + 'users/diazmoraj')
		.then(response=>response.json())
		.then(data=>{
			setTodos(data.todos)
		})
		.catch((error) => {console.log(error)})
	}

	// obtener lista de todos
	function addTodos(){
		let newTodo ={}
		fetch(todosURL + 'users/diazmoraj', {
			method: "POST",
			body: JSON.stringify(newTodo),
			headers: {'Content-type': 'application/json'}
		})
		.then(response=>response.json())
		.then(data=>{
			setTodos(data.todos)
		})
		.catch((error) => {console.log(error)})
	}
		
	function deltodos(){
		
	}
	getTodos();



	return (
		<div className="text-center">
			<h1>TO DO's</h1>
			
		</div>
	);
};

export default Home;
