import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-text" onClick={() => toggleComplete(todo.id)}>
        <span>{todo.text}</span>
      </div>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)} title="Delete Task">
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default TodoItem;
