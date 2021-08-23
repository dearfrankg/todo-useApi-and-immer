import createStore from "./createStore";
import produce from "immer";

let nextTodoId = 0;

let [TodosStoreProvider, useTodosStore] = createStore(
  ({ state, setState }) => {
    const addTodo = (text) => {
      setState(
        produce((draft) => {
          draft.todos.push({
            id: nextTodoId++,
            text,
            completed: false
          });
        })
      );
    };

    const toggleTodo = (id) => {
      setState(
        produce((draft) => {
          draft.todos.forEach((todo) => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
          });
        })
      );
    };

    const setFilter = (filter) => {
      setState(
        produce((draft) => {
          draft.filter = filter;
        })
      );
    };

    const getFilter = () => {
      return state.filter;
    };

    const getVisibleTodos = () => {
      return filterTodos(state.todos, getFilter());
    };

    return {
      addTodo,
      toggleTodo,
      setFilter,
      getFilter,
      getVisibleTodos
    };
  },
  {
    todos: [],
    filter: "SHOW_ALL"
  }
);

function filterTodos(todos, filter) {
  const filters = {
    SHOW_ALL: () => todos,
    SHOW_COMPLETED: () => todos.filter((t) => t.completed),
    SHOW_ACTIVE: () => todos.filter((t) => !t.completed)
  };

  if (!filters[filter]) {
    throw new Error("Unknown filter: " + filter);
  }

  return filters[filter]();
}

export { TodosStoreProvider, useTodosStore };
