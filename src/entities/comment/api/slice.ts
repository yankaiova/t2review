import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../model/types";
import { SERVER_API } from "@/shared/lib/constants";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/api/v1/comments`,
  }),

  endpoints: (build) => ({
    getAllCommentsByMeeting: build.query<Comment[], number>({
      //получить все комментарии по id встречи
      query: (meeting_id) => `/meeting_id=${meeting_id}`,
    }),
    addComments: build.mutation<
      Comment,
      {
        meeting_id: number;
        user_id: number;
        create_time: string;
        comment_text: string;
      }
    >({
      //добавление - создание комментария
      query: ({ meeting_id, user_id, create_time, comment_text }) => ({
        url: "",
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
