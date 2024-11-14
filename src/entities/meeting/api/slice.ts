import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Meeting } from "../model/types";
import { SERVER_API } from "@/shared/lib/constants";

export const meetingsApi = createApi({
  reducerPath: "meetingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/api/v1/meetings`,
  }),

  endpoints: (build) => ({
    getAllMeeting: build.query<Meeting[], void>({
      query: () => ``,
    }),
    getMeetingbyId: build.query<Meeting, number>({
      //получение встречи по id
      query: (id) => `/${id}`,
    }),
    createMeeting: build.mutation<Meeting, Partial<Meeting>>({
      //добавление - создание встречи
      query: ({
        meeting_status,
        slot_id,
        start_time,
        end_time,
        meeting_type,
        description,
        expert_id,
      }) => ({
        url: "",
        method: "POST",
        body: {
          meeting_status,
          slot_id,
          start_time,
          end_time,
          meeting_type,
          description,
          expert_id,
        },
      }),
    }),
    setMeetingStatus: build.mutation<
      void,
      { meeting_id: number; status: string }
    >({
      //изменение статуса встречи
      query: ({ meeting_id, status }) => ({
        url: `/${meeting_id}/status`,
        method: "PATCH",
        body: { meeting_id, status }, //при завершении встречи - completed, при удалении встречи - canceled
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
        url: `/${meeting_id}/end_time`,
        method: "PATCH",
        body: { meeting_id, end_time },
      }),
    }),
    setNewSlotMeeting: build.mutation<
      void,
      {
        meeting_id: number;
        slot_id: number;
        date: number;
        start_time: string;
        end_time: string;
        type_meeting: "offline" | "online";
      }
    >({
      // перенос встречи
      query: ({
        meeting_id,
        slot_id,
        date,
        start_time,
        end_time,
        type_meeting,
      }) => ({
        url: `/${meeting_id}/slot`,
        method: "PATCH",
        body: { meeting_id, slot_id, date, start_time, end_time, type_meeting },
      }),
    }),
  }),
});

export const {
  useGetAllMeetingQuery,
  useGetMeetingbyIdQuery,
  useCreateMeetingMutation,
  useSetMeetingStatusMutation,
  useUpdateTimeMeetingMutation,
  useSetNewSlotMeetingMutation,
} = meetingsApi;
