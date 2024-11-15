import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Meeting } from "../model/types";

export const meetingsApi = createApi({
  reducerPath: "meetingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://127.0.0.1:8055/items`,
  }),

  endpoints: (build) => ({
    getAllMeetingUser: build.query<any, { expert_id: string; date: string }>({
      query: ({ expert_id, date }) =>
        `/meeting/?filter[expert_id][_eq]=${expert_id}&filter[date][_eq]=${date}`,
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
    getMeetingbyId: build.query<any, number>({
      //получение встречи по id
      query: (id) => `/meeting/${id}`,
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
    getUsersbyMeeting: build.query<any, number>({
      //получение встречи по id
      query: (id) => `/meetings_users/?filter[meeting_id][_eq]=${id}`,
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
    createMeeting: build.mutation<Meeting, Partial<Meeting>>({
      //добавление - создание встречи
      query: ({
        slot_id,
        start_time,
        end_time,
        date,
        meeting_type,
        description,
        expert_id,
      }) => ({
        url: "/meeting",
        method: "POST",
        body: {
          meeting_status: "запланирована",
          slot_id,
          start_time,
          end_time,
          date,
          meeting_type,
          description,
          expert_id,
        },
      }),
    }),
    createMeetingUser: build.mutation<
      Meeting,
      { meeting_id: number; user_id: number }
    >({
      //добавление - создание встречи
      query: ({ meeting_id, user_id }) => ({
        url: "/meetings_users",
        method: "POST",
        body: {
          meeting_id,
          user_id,
        },
      }),
    }),
    setMeetingStatus: build.mutation<
      void,
      { meeting_id: number; meeting_status: string }
    >({
      //изменение статуса встречи
      query: ({ meeting_id, meeting_status }) => ({
        url: `/meeting/${meeting_id}`,
        method: "PATCH",
        body: { meeting_status }, //при завершении встречи - completed, при удалении встречи - canceled
      }),
    }),
    updateTimeMeeting: build.mutation<
      void,
      {
        meeting_id: number;
        end_time: string;
      }
    >({
      //продление встречи
      query: ({ meeting_id, end_time }) => ({
        url: `/meeting/${meeting_id}`,
        method: "PATCH",
        body: { end_time },
      }),
    }),
    setNewSlotMeeting: build.mutation<void, Partial<Meeting>>({
      // перенос встречи
      query: ({
        meeting_id,
        slot_id,
        date,
        start_time,
        end_time,
        meeting_type,
      }) => ({
        url: `/meeting/${meeting_id}`,
        method: "PATCH",
        body: { slot_id, date, start_time, end_time, meeting_type },
      }),
    }),
  }),
});

export const {
  useGetAllMeetingUserQuery,
  useGetMeetingbyIdQuery,
  useCreateMeetingMutation,
  useSetMeetingStatusMutation,
  useUpdateTimeMeetingMutation,
  useSetNewSlotMeetingMutation,
  useGetUsersbyMeetingQuery,
  useCreateMeetingUserMutation,
} = meetingsApi;
