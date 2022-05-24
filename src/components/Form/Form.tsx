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

  return (
    <label>
      <input
        className="inp_form"
        value={text}
        type="text"
        onChange={(e) => addText(e.target.value)}
      />
      <button onClick={() => addList()}>Add todo</button>
      <button onClick={() => dispatch(markTodos())}>Mark all todo</button>
      <button onClick={() => dispatch(deleteMarkTodo())}>
        Delete mark todo
      </button>
    </label>
  );
});

export default Form;
