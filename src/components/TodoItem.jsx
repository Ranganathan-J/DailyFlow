import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faCheck, faSave } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, handleDelete, handleCheck, handleEdit }) => {
    const [editingText, setEditingText] = useState(todo.title);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditingText(todo.title); // Reset editing text to current todo title
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
        setEditingText(todo.title); // Reset editing text to current todo title
    };

    return (
        <li key={todo.id} className="flex justify-between items-center p-1 text-red-600">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editingText}
                        onChange={handleTextChange}
                        className="w-80 ml-4 px-2 outline-none bg-transparent text-blue-600"
                    />
                    <div className="">
                        <button
                            className="border-gray-400 bg-green-700 p-1 border-2 rounded-full text-yellow-600 hover:text-blue-500 px-2"
                            onClick={handleSaveClick}
                        >
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        <button
                            className="bg-gray-900 border-2 rounded-full p-1 text-rose-700 hover:text-blue-500 focus:outline-none ml-2"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span className="w-80 ml-4">{todo.title}</span>
                    <div className="">
                        <button
                            className="border-green-700 bg-green-700 p-1 border-2 rounded-full text-yellow-600 hover:text-blue-500"
                            onClick={() => handleCheck(todo.id)}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                            className="bg-gray-900 border-2 rounded-full p-1 text-rose-700 hover:text-blue-500 focus:outline-none ml-2"
                            onClick={handleEditClick}
                        >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </button>
                        <button
                            className="bg-gray-600 p-1 border-2 rounded-full text-red-800 hover:text-red-500 focus:outline-none ml-2"
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
