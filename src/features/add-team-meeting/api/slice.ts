import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { Team, UserTeamResponse } from "../model/types";
import { BaseUser } from "@/entities/meeting";

export const teamsApi = createApi({
  reducerPath: "teamsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API.TEAM,
  }),

  endpoints: (build) => ({
    getAllTeams: build.query<Team[], void>({
      //получение всех скиллов
      query: () => `/team`,
    }),
    getUserbyTeamid: build.query<UserTeamResponse[], number>({
      //получение пользователя по id
      query: (id) => `/rpc/get_team_members?team_id=${id}`,
    }),
    getUserById: build.query<BaseUser, number>({
      //получение всех скиллов
      query: (id) =>
        `/userprofile?userprofileid=eq.${id}&select=firstname,lastname`,
    }),
  }),
});

export const {
  useGetAllTeamsQuery,
  useGetUserbyTeamidQuery,
  useGetUserByIdQuery,
  useLazyGetUserbyTeamidQuery,
} = teamsApi;
