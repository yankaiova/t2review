import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Meeting } from "@/shared/model/types";
import { SERVER_API } from "@/shared/lib/constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API}/api/v1/auth`,
  }),

  endpoints: (build) => ({
    authUser: build.mutation<Meeting, { user: string; password: string }>({
      query: ({ user, password }) => ({
        url: "",
        method: "POST",
        body: {
          user,
          password,
        },
      }),
    }),
  }),
});

export const { useAuthUserMutation } = authApi;
