import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, markTodos, deleteMarkTodo } from "../../store/todoSlice";
const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const setList = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <label>
      <input
        className="inp_form"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setList()}>Add todo</button>
      <button onClick={() => dispatch(markTodos())}>Mark all todo</button>
      <button onClick={() => dispatch(deleteMarkTodo())}>
        Delete mark todo
      </button>
    </label>
  );
};

export default Form;
