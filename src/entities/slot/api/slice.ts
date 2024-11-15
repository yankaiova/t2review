import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Slot } from "../model/types";

export const slotsApi = createApi({
  reducerPath: "slotsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://127.0.0.1:8055/items/slot` }),

  endpoints: (build) => ({
    getSlotsbyExpertAndDate: build.query<
      any,
      { creator_id: number; date: string }
    >({
      //получить доступные слоты у эксперта
      query: ({ creator_id, date }) =>
        `/?filter[creator_id][_eq]=${creator_id}&filter[date][_eq]=${date}`,
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
    getSlotsbyExpert: build.query<any, number>({
      //получить доступные слоты у эксперта
      query: (creator_id) => `/?filter[creator_id][_eq]=${creator_id}`,
      transformResponse: (response: any) => {
        return response.data;
      },
    }),
    createSlot: build.mutation<Slot, Partial<Slot>>({
      //добавление - создание слота
      query: ({ creator_id, start_time, date, end_time, slot_type }) => ({
        url: "",
        method: "POST",
        body: {
          creator_id,
          start_time,
          date,
          end_time,
          slot_type,
          is_availible: "true",
        },
      }),
    }),
    updateSlotAvalible: build.mutation<
      void,
      {
        slot_id: number;
        is_availible: string;
      }
    >({
      //слот недоступен теперь (занят) или свободен
      query: ({ slot_id, is_availible }) => ({
        url: `/${slot_id}`,
        method: "PATCH",
        body: { is_availible },
      }),
    }),
    updateSlotEndTime: build.mutation<
      void,
      {
        slot_id: number;
        end_time: string;
      }
    >({
      //продление слота при продлении встречи
      query: ({ slot_id, end_time }) => ({
        url: `/${slot_id}`,
        method: "PATCH",
        body: { end_time },
      }),
    }),
    deleteSlot: build.mutation<void, number>({
      //продление слота при продлении встречи
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetSlotsbyExpertQuery,
  useLazyGetSlotsbyExpertAndDateQuery,
  useUpdateSlotAvalibleMutation,
  useUpdateSlotEndTimeMutation,
} = slotsApi;
