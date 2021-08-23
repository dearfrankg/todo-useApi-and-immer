import React from "react";
import TodoList from "../components/TodoList";
import { useTodosStore } from "../stores/todosStore";
import withHooks from "../withHooks";

const mapHooksToProps = props => {
  let { getVisibleTodos, toggleTodo } = useTodosStore();

  return {
    todos: getVisibleTodos(),
    toggleTodo
  };
};

export default withHooks(mapHooksToProps)(TodoList);
