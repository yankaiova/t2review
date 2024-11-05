import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { FilterOptions, User } from "@/shared/model/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER_API}/api/v1/users` }),

  endpoints: (build) => ({
    getExpertsByQuery: build.mutation<User[], string>({
      //поиск экспертов по ключевым словам
      query: (query) => ({
        url: `/search=${query}`,
        method: "GET",
      }),
    }),
    getExpertsByFilter: build.mutation<User[], Partial<FilterOptions>>({
      //получить экспертов по фильтрам
      query: (chosenOptions) => ({
        url: `/filters`,
        method: "GET",
        body: { chosenOptions },
      }),
    }),
    getUserByName: build.mutation<User[], string>({
      //получить пользователя по id
      query: (name) => ({
        url: `/name`,
        method: "GET",
        body: { name },
      }),
    }),
    getUserbyId: build.query<User, number>({
      //получение пользователя по id
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetUserbyIdQuery,
  useGetExpertsByQueryMutation,
  useGetExpertsByFilterMutation,
  useGetUserByNameMutation,
} = usersApi;
