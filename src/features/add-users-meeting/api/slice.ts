import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
import { Team } from "../../../entities/meeting/model/types";

export interface UserTeamResponse {
  userprofileid: number;
  firstname: string;
  lastname: string;
  position: string;
  description: string;
  contactinformation: string;
  privacysettings: string;
}

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
  }),
});

export const { useGetAllTeamsQuery, useGetUserbyTeamidQuery } = teamsApi;
