import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {

    const todo = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <div>

            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Your Todos
            </h2>

            {todo.length === 0 ? (

                <p className="text-center text-gray-400 py-6">
                    No todos added yet!
                </p>

            ) : (

                <ul className="space-y-3">

                    {todo.map((todo) => (

                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4"
                        >

                            <span className="text-gray-700 font-medium break-all">
                                {todo.text}
                            </span>

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                            >
                                Delete
                            </button>

                        </li>

                    ))}

                </ul>

            )}

        </div>
    )
}

export default Todo