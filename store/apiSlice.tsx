import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your API slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => "/todos",
    }),
    getTodoById: builder.query<Todo, number>({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

// Export the generated hooks for the queries
export const { useGetAllTodosQuery, useLazyGetTodoByIdQuery } = apiSlice;

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
