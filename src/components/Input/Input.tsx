import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { todoTextUpdate, TodoType } from "../../store/todoSlice";
import { FC } from "react";

interface IpnType {
  todo: TodoType;
}

const Input: FC<IpnType> = ({ todo }) => {
  const dispatch = useDispatch();

  const textUpdate = useCallback(
    (e: string, id: number) => {
      dispatch(todoTextUpdate({ text: e, id: id }));
    },
    [dispatch]
  );

  return (
    <input
      onClick={(e) => e.stopPropagation()}
      type="text"
      value={todo.text}
      onChange={(e) => textUpdate(e.target.value, todo.id)}
    />
  );
};

export default Input;
