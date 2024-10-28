import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const meetingsApi = createApi({
  reducerPath: "meetingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (build) => ({
    getAllMeeting: build.query<Meeting[], void>({
      query: () => `/meetings`,
    }),
    getMeetingbyId: build.query<Meeting, number>({
      //получение встречи по id
      query: (id) => `/meetings/${id}`,
    }),
    createMeeting: build.mutation<Meeting, Meeting>({
      //добавление - создание встречи
      query: ({
        meeting_status,
        slot,
        start_time,
        end_time,
        meeting_type,
        description,
        expert_id,
        material_id,
      }) => ({
        url: "/create-meeting", //enpoint !!!
        method: "POST",
        body: {
          meeting_status,
          slot,
          start_time,
          end_time,
          meeting_type,
          description,
          expert_id,
          material_id,
        },
      }),
    }),
    setMeetingStatus: build.mutation<
      void,
      { meetingId: string; status: string }
    >({
      //изменение статуса встречи
      query: ({ meetingId, status }) => ({
        url: "/status", //прописать endpoint !!!
        method: "PATCH",
        body: { meetingId, status }, //при завершении встречи - completed, при удалении встречи - canceled
      }),
    }),
    updateMeeting: build.mutation<
      void,
      {
        meetingId: string;
        slot_id: number;
        start_time: string;
        end_time: string;
      }
    >({
      //продление встречи и перенос встречи
      query: ({ meetingId, slot_id, start_time, end_time }) => ({
        url: "/extend", //прописать endpoint !!!
        method: "PATCH",
        body: { meetingId, slot_id, start_time, end_time },
      }),
    }),
  }),
});

export const {
  useGetAllMeetingQuery,
  useGetMeetingbyIdQuery,
  useCreateMeetingMutation,
  useSetMeetingStatusMutation,
  useUpdateMeetingMutation,
} = meetingsApi;
