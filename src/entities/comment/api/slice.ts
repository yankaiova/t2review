import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../model/types";
import { SERVER_API } from "@/shared/lib/constants";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://127.0.0.1:8055/items/comment`,
  }),

  endpoints: (build) => ({
    getAllCommentsByMeeting: build.query<any, number>({
      //получить все комментарии по id встречи
      query: (meeting_id) => `/?filter[meeting_id][_eq]=${meeting_id}`,
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
    addComments: build.mutation<
      Comment,
      {
        meeting_id: number;
        user_id: number;
        comment_text: string;
      }
    >({
      //добавление - создание комментария
      query: ({ meeting_id, user_id, comment_text }) => ({
        url: "",
        method: "POST",
        body: {
          meeting_id,
          user_id,
          comment_text,
        },
      }),
    }),
  }),
});

export const { useGetAllCommentsByMeetingQuery, useAddCommentsMutation } =
  commentsApi;
