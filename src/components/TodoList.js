import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-list-container">
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      ) : (
        <p className="empty-list-message">No tasks yet. Add your first task!</p>
      )}
    </div>
  );
};

export default TodoList;
