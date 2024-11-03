import { useLazyGetTodoByIdQuery, Todo } from "../../../store/apiSlice";
interface TodoRowProps {
  todo: Todo;
}
export default function TodoRow({ todo }: TodoRowProps) {
  const { id, title } = todo || {};
  const [trigger, { data: todoDetails, isLoading }] = useLazyGetTodoByIdQuery();

  function handleGetStatus() {
    trigger(id);
  }

  function getStatus(isCompleted: boolean) {
    return isCompleted ? "Completed" : "Pending..";
  }
  return (
    <div>
      <span>{title}</span>
      <button onClick={handleGetStatus}>Get Status</button>
      {isLoading && <span>Loading status...</span>}
      {todoDetails && <span>{getStatus(todoDetails.completed)}</span>}
    </div>
  );
}
