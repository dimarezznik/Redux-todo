import React from "react";
import { useDispatch } from "react-redux";
import {deleteTodo, markTask, TodoType} from "../../store/todoSlice";
import { FC } from "react";
import Input from "../Input/Input";

interface IpnType {
    todo: TodoType
}

const TodoItem: FC<IpnType> = React.memo(({ todo }) => {
    const dispatch = useDispatch();

    const handleMarkTask = () => {
        dispatch(markTask({ id: todo.id }))
    }

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <li
            onClick={handleMarkTask}
            key={todo.id}
            className={!todo.isDone ? "li_item_light" : "li_item_dark"}
        >
            <Input todo={todo} />
            <span
                className={todo.isDone ? "span_light" : "span_dark"}
                onClick={handleDeleteTodo}
            >
              X
            </span>
        </li>
    );
});

export default TodoItem
