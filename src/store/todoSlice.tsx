import { createSlice } from "@reduxjs/toolkit";

export interface ID {
  id: number;
}

export interface TodoType {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TodosType {
  todos: TodoType[];
}

function findList(state: TodosType, action: { payload: ID }) {
  return state.todos.find((todo: TodoType) => todo.id === action.payload.id);
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state: TodosType, action: { payload: string }): void {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        isDone: false,
      });
    },
    markTask(state: TodosType, action: { payload: ID }): void {
      const item = findList(state, action);
      if (!item) return;
      item.isDone = !item.isDone;
    },
    deleteTodo(state: TodosType, action): void {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markTodos(state: TodosType): void {
      state.todos.forEach((todo) => (todo.isDone = true));
    },
    deleteMarkTodo(state: TodosType): void {
      state.todos = state.todos.filter((todo) => !todo.isDone);
    },
    todoTextUpdate(state: TodosType, action): void {
      const item = findList(state, action);
      if (!item) return;
      item.text = action.payload.text;
    },
  },
});

export const {
  addTodo,
  markTask,
  deleteTodo,
  markTodos,
  deleteMarkTodo,
  todoTextUpdate,
} = todoSlice.actions;

export default todoSlice.reducer;
