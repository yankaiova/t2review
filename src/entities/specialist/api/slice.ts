import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { FilterOptions, User } from "@/shared/model/types";

export const specialistsApi = createApi({
  reducerPath: "specialistsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API.PROFILE,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${"X-API-TOKEN:3GXJiyB2SmiGf0O7j-U0luHjm-mrEFU6DB-D86rWRopwalYwzEEhaCLjiE4OOOFd"}`
      );
      return headers;
    },
  }),

  endpoints: (build) => ({
    getExpertsByQuery: build.mutation<User[], string>({
      //поиск экспертов по ключевым словам
      query: (query) => ({
        url: `specialists/search=${query}`,
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
    getUserbyId: build.query<User, number>({
      //получение пользователя по id
      query: (id) => `specialists/${id}`,
    }),
  }),
});

export const {
  useGetUserbyIdQuery,
  useGetExpertsByQueryMutation,
  useGetExpertsByFilterMutation,
} = specialistsApi;
