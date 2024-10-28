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
        },
      }),
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetAllSlotsQuery,
  useLazyGetSlotbyIdQuery,
} = slotsApi;
