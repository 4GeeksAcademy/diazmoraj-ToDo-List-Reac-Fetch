import React, { useEffect, useState } from "react";


//create your first component
const Home = () => {

	const todosURL = "https://playground.4geeks.com/todo/users/diazmoraj"

	fetch(todosURL)
	.then((response) => {console.log(response)
		return response.json()
	})
	.then((data) => {console.log(data)})
	.catch((error) => {error})

	/*const [todos, setTodos] = useState([])

	useEffect(() => {
		getTodos();
	},[]);
	
	//obtener lista de todos
	const getTodos = () => {

		fetch(todosURL + 'users/diazmoraj')
		.then(response=>response.json())
		.then(data => {
			if (Array.isArray(data.todos)){
				setTodos(data.todos);
			}else{
				console.error('La respuesta no es un array', data);
			}
		})
		.catch((error) => {console.log(error)});
	};

	

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
	getTodos();*/



	return (
		<div className="text-center">
			<h1>TO DO's</h1>
			<h3>{getTodos}</h3>
		</div>
	);
};

export default Home;
