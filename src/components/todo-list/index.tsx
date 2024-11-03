import { Todo, useGetAllTodosQuery } from "../../../store/apiSlice";
import TodoRow from "../todo-item";

export default function TodoList() {
  const { data: todo, error, isLoading } = useGetAllTodosQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred:</div>;
  return (
    <ul>
      {todo?.todos?.map((todo: Todo) => (
        <li key={todo.id}>
          <TodoRow todo={todo} />
        </li>
      ))}
    </ul>
  );
}
