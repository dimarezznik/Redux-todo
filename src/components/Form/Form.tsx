import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, markTodos, deleteMarkTodo } from "../../store/todoSlice";
const Form = React.memo(() => {
  const [text, addText] = useState("");
  const dispatch = useDispatch();

  const addList = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      addText("");
    }
  };

  const isDoneTodo = () => {
      dispatch(markTodos())
  }

  const removeIsDoneTodo = () => {
      dispatch(deleteMarkTodo())
  }

  return (
    <label>
      <input
        className="inp_form"
        value={text}
        type="text"
        onChange={(e) => addText(e.target.value)}
      />
      <button onClick={addList}>Add todo</button>
      <button onClick={isDoneTodo}>Mark all todo</button>
      <button onClick={removeIsDoneTodo}>
        Delete mark todo
      </button>
    </label>
  );
});

export default Form;
