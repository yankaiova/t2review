import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expertsApi = createApi({
  reducerPath: "expertsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (build) => ({
    getExpertsByFilters: build.query<Expert[], void>({
      query: () => `/users/experts`,
    }),
    getExpertbyId: build.query<Expert, number>({
      //получение эксперта по id
      query: (id) => `/users/experts/${id}`,
    }),
    getUserbyId: build.query<Expert, number>({
      //получение эксперта по id
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetExpertbyIdQuery, useGetExpertsByFiltersQuery } =
  expertsApi;
