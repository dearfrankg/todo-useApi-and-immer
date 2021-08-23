import Link from "../components/Link";
import withHooks from "../withHooks";
import { useTodosStore } from "../stores/todosStore";

const mapHooksToProps = props => {
  let { getFilter, setFilter } = useTodosStore();

  return {
    active: props.filter === getFilter(),
    onClick: () => setFilter(props.filter)
  };
};

export default withHooks(mapHooksToProps)(Link);
