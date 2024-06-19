import React from 'react';
import TodoItem from './TodoItem'; // Assuming you have a TodoItem component
import { v4 as uuidv4 } from 'uuid'; // Importing uuid for generating unique ids

const TodoList = ({ todo, setTodo }) => {
    const handleDelete = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
    };

    const handleCheck = (id) => {
        setTodo(
            todo.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleEdit = (id, newText) => {
        const updatedTodos = todo.map((todos) =>
            todos.id === id ? { ...todos, title: newText } : todos
        );
        setTodo(updatedTodos);
    };

    return (
        <div className='flex items-center flex-col text-2xl font-sans '>
            {todo.map((todo) => (
                <TodoItem
                    key={todo.id} 
                    todo={todo}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    );
};

export default TodoList;
