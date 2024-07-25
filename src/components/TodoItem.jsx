import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faCheck, faSave } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, handleDelete, handleCheck, handleEdit }) => {
    const [editingText, setEditingText] = useState(todo.title);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditingText(todo.title); 
    };

    const handleTextChange = (e) => {
        setEditingText(e.target.value);
    };

    const handleSaveClick = () => {
        handleEdit(todo.id, editingText);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditingText(todo.title); 
    };

    return (
        <li key={todo.id} className="flex justify-between items-center p-2 sm:p-4 md:p-6">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editingText}
                        onChange={handleTextChange}
                        className="w-full md:w-80 ml-2 px-2 outline-none bg-transparent text-blue-600"
                    />
                    <div className="flex space-x-2">
                        <button
                            className="bg-green-700 p-1 md:p-2 border-2 border-green-700 rounded-full text-yellow-600 hover:text-blue-500"
                            onClick={handleSaveClick}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button
                            className="bg-gray-900 p-1 md:p-2 border-2 border-gray-900 rounded-full text-rose-700 hover:text-blue-500"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span className={`w-full md:w-80 ml-2 ${todo.completed ? 'line-through text-gray-500' : 'text-red-600'}`}>
                        {todo.title}
                    </span>
                    <div className="flex space-x-2">
                        <button
                            className="bg-green-700 p-1 md:p-2 border-2 border-green-700 rounded-full text-yellow-600 hover:text-blue-500"
                            onClick={() => handleCheck(todo.id)}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                            className="bg-gray-900 p-1 md:p-2 border-2 border-gray-900 rounded-full text-rose-700 hover:text-blue-500"
                            onClick={handleEditClick}
                        >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </button>
                        <button
                            className="bg-gray-600 p-1 md:p-2 border-2 border-gray-600 rounded-full text-red-800 hover:text-red-500"
                            onClick={() => handleDelete(todo.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
