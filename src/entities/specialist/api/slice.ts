import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { FilterOptions, User } from "@/shared/model/types";

export const specialistsApi = createApi({
  reducerPath: "specialistsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API.PROFILE,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
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
      query: (id) => `specialists/${id}`,
    }),
    getAllSkills: build.query<User, number>({
      //получение всех скиллов
      query: () => `/skills`,
    }),
    getAllPositiins: build.query<User, number>({
      //получение всех позиций
      query: () => `/positions`,
    }),
  }),
});

export const {
  useGetUserbyIdQuery,
  useGetExpertsByQueryMutation,
  useGetExpertsByFilterMutation,
  useGetUserByNameMutation,
} = specialistsApi;
