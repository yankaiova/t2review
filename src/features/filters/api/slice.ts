import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API, SERVER_API_PROFILE } from "@/shared/lib/constants";
import { Position, User } from "@/shared/model/types";

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API_PROFILE}/api/v1`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (build) => ({
    getAllSkills: build.query<any, void>({
      //получение всех скиллов
      query: () => `/skills`,
    }),
    getAllPositiins: build.query<Position[], void>({
      //получение всех позиций
      query: () => `/positions`,
    }),
  }),
});

export const { useGetAllPositiinsQuery, useGetAllSkillsQuery } = filtersApi;
