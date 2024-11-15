import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { UserProfileResponse } from "../model/types";

export const specialistsApi = createApi({
  reducerPath: "specialistsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API.PROFILE}/api/v1`,
    prepareHeaders: (headers) => {
      headers.set(
        "X-API-TOKEN",
        "eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiUk9MRV9BRE1JTiJ9LCJpZCI6MSwic3ViIjoiYWRtaW4iLCJpYXQiOjE3MzE2NjkwODAsImV4cCI6MTczMTY4NzA4MH0.XcOxmgXTthzJMTgPBgX32V_6GJsZut4C93RldJPSzd3cOdvfJFNXc8vVprkTnmKi"
      );
      return headers;
    },
  }),

  endpoints: (build) => ({
    getExpertsByQuery: build.query<UserProfileResponse[], string>({
      //поиск экспертов по ключевым словам
      query: (query) => ({
        url: `specialists?search=${query}`,
        method: "GET",
      }),
    }),
    getExpertsByFilter: build.query<
      UserProfileResponse[],
      { skill: string | null; position: string; level: string | null }
    >({
      //получить экспертов по фильтрам
      query: () => ({
        url: `/specialists?position=${position}&skill=${skill}&level=${level}`,
        method: "GET",
      }),
    }),
    getExpertbyId: build.query<UserProfileResponse, number>({
      //получение пользователя по id
      query: (id) => `specialists/${id}`,
    }),
  }),
});

export const {
  useGetExpertbyIdQuery,
  useGetExpertsByQueryQuery,
  useGetExpertsByFilterQuery,
} = specialistsApi;
