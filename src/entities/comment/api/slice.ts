import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "@/shared/model/types";

export const commentsApi = createApi({
  reducerPath: "meetingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (build) => ({
    getAllCommentsByMeeting: build.query<Comment[], number>({
      query: (id) => `/comments/meeting/${id}`,
    }),
    addComments: build.mutation<Comment, Partial<Comment>>({
      //добавление - создание встречи
      query: ({ meeting_id, user_id, create_time, comment_text }) => ({
        url: "/comments/add", //enpoint !!!
        method: "POST",
        body: {
          meeting_id,
          user_id,
          create_time,
          comment_text,
        },
      }),
    }),
  }),
});

export const { useGetAllCommentsByMeetingQuery, useAddCommentsMutation } =
  commentsApi;
