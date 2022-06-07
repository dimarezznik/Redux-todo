import { useSelector } from "react-redux";
import React from "react";
import TodoItem from "./TodoItem";

const Todo = React.memo(() => {
  const todos = useSelector((state: any) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo: { id: number; text: string; isDone: boolean }) => {
        return <TodoItem todo={todo} key={todo.id} />
      })}
    </ul>
  );
});

export default Todo;
