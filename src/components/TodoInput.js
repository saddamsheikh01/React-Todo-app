import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
