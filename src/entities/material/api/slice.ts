import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Material } from "../model/types";

export const materialsApi = createApi({
  reducerPath: "materialsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://127.0.0.1:8055/items/meetings_materials`,
  }),

  endpoints: (build) => ({
    getAllMaterialsByMeeting: build.query<any, number>({
      //получить все комментарии по id встречи
      query: (meeting_id) => `/?filter[meeting_id][_eq]=${meeting_id}`,
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
    addMaterial: build.mutation<
      Material,
      {
        meeting_id: number;
        material_link: string;
      }
    >({
      //добавление - создание комментария
      query: ({ meeting_id, material_link }) => ({
        url: "",
        method: "POST",
        body: {
          meeting_id,
          material_link,
        },
      }),
    }),
  }),
});

export const { useAddMaterialMutation, useGetAllMaterialsByMeetingQuery } =
  materialsApi;
