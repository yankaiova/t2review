import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { UserProfileResponse } from "../model/types";

export const specialistsApi = createApi({
  reducerPath: "specialistsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API.PROFILE,
    prepareHeaders: (headers) => {
      headers.set(
        "X-API-TOKEN",
        "3GXJiyB2SmiGf0O7j-U0luHjm-mrEFU6DB-D86rWRopwalYwzEEhaCLjiE4OOOFd"
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
    getExpertsByFilter: build.query<UserProfileResponse[], string>({
      //получить экспертов по фильтрам
      query: (position) => ({
        url: `?position=${position}`,
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
