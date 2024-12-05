import React, {useState, useEffect} from "react";

function Apiintegration() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error("Error fetching data:", error))
    },[])

    return(
        <div>
            <h1>Todo List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "yes" : "No"}</td>
                        </tr>
                    )
                )};
                    
                </tbody>
            </table>
        </div>
    );
}
export default Apiintegration ;