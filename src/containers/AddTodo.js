import React from "react";
import { useTodosStore } from "../stores/todosStore";
import withHooks from "../withHooks";

const AddTodo = props => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.addTodo(input.value);
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

const mapHooksToProps = props => {
  let { addTodo } = useTodosStore();

  return {
    addTodo
  };
};

export default withHooks(mapHooksToProps)(AddTodo);
