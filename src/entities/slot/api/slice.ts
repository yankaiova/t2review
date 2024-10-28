import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const slotsApi = createApi({
  reducerPath: "slotsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (build) => ({
    getAllSlots: build.query<Slot[], void>({
      query: () => `/meetings`,
    }),
    getSlotbyId: build.query<Slot, number>({
      //получение встречи по id
      query: (id) => `/meetings/${id}`,
    }),
    createSlot: build.mutation<Slot, Slot>({
      //добавление - создание слота
      query: ({ user_id, start_time, end_time, slot_type }) => ({
        url: "/create-meeting", //enpoint !!!
        method: "POST",
        body: {
          user_id,
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
      //слот недоступен теперь (занят)
      query: ({ slot_id, is_avalible }) => ({
        url: "/slot", //прописать endpoint !!!
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
      //слот недоступен теперь (занят)
      query: ({ slot_id, end_time }) => ({
        url: "/slot", //прописать endpoint !!!
        method: "PATCH",
        body: { slot_id, end_time },
      }),
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetAllSlotsQuery,
  useLazyGetSlotbyIdQuery,
  useUpdateSlotAvalibleMutation,
  useUpdateSlotEndTimeMutation,
} = slotsApi;
