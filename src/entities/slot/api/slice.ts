import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Slot } from "@/shared/model/types";
import { SERVER_API } from "@/shared/lib/constants";

export const slotsApi = createApi({
  reducerPath: "slotsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER_API}/api/v1/slots` }),

  endpoints: (build) => ({
    getSlotsbyExpert: build.query<Slot[], number>({
      //получить доступные слоты у эксперта
      query: (expert_id) => `/expert/${expert_id}`,
    }),
    getSlotbyId: build.query<Slot, number>({
      //получение cлота по id
      query: (id) => `/${id}`,
    }),
    getSlotbyExpertId: build.query<Slot, number>({
      //получение встречи по id
      query: (id) => `/slots/expert/${id}`,
    }),
    createSlot: build.mutation<Slot, Partial<Slot>>({
      //добавление - создание слота
      query: ({ creator_id, start_time, end_time, slot_type }) => ({
        url: "",
        method: "POST",
        body: {
          creator_id,
          start_time,
          end_time,
          slot_type,
          is_avalible: true,
        },
      }),
    }),
    updateSlotAvalible: build.mutation<
      void,
      {
        slot_id: number;
        is_avalible: boolean;
      }
    >({
      //слот недоступен теперь (занят) или свободен
      query: ({ slot_id, is_avalible }) => ({
        url: `/${slot_id}/availability`,
        method: "PATCH",
        body: { slot_id, is_avalible },
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
        url: `/${slot_id}/end_time`,
        method: "PATCH",
        body: { slot_id, end_time },
      }),
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetSlotsbyExpertQuery,
  useLazyGetSlotbyIdQuery,
  useUpdateSlotAvalibleMutation,
  useUpdateSlotEndTimeMutation,
} = slotsApi;
