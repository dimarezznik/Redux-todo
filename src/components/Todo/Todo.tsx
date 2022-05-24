import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markTask } from "../../store/todoSlice";
import Input from "../Input/Input";
import React from "react";

const Todo = React.memo(() => {
  const todos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo: { id: number; text: string; isDone: boolean }) => {
        return (
          <li
            onClick={() => dispatch(markTask({ id: todo.id }))}
            key={todo.id}
            className={!todo.isDone ? "li_item_light" : "li_item_dark"}
          >
            <Input todo={todo} />
            <span
              className={todo.isDone ? "span_light" : "span_dark"}
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              X
            </span>
          </li>
        );
      })}
    </ul>
  );
});

export default Todo;
