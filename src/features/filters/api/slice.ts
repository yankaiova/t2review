import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { Position, Skill } from "@/shared/model/types";

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API.PROFILE}/api/v1`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${"X-API-TOKEN:3GXJiyB2SmiGf0O7j-U0luHjm-mrEFU6DB-D86rWRopwalYwzEEhaCLjiE4OOOFd"}`
      );
      return headers;
    },
  }),

  endpoints: (build) => ({
    getAllSkills: build.query<Skill[], void>({
      //получение всех скиллов
      query: () => `/skills`,
    }),
    getAllPositions: build.query<Position[], void>({
      //получение всех позиций
      query: () => `/positions`,
    }),
  }),
});

export const { useGetAllPositionsQuery, useGetAllSkillsQuery } = filtersApi;
