"use client";
import { Provider } from "react-redux";
import { store } from "../../store";
import TodoList from "../components/todo-list";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <TodoList />
      </main>
    </Provider>
  );
}
