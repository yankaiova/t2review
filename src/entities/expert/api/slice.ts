import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expertsApi = createApi({
  reducerPath: "expertsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (build) => ({
    getExpertsByFilters: build.query<Expert[], void>({
      query: () => `/experts`,
    }),
    getExpertbyId: build.query<Expert, number>({
      //получение эксперта по id
      query: (id) => `/experts/${id}`,
    }),
  }),
});

export const { useGetExpertbyIdQuery, useGetExpertsByFiltersQuery } =
  expertsApi;
