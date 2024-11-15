import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API } from "@/shared/lib/constants";
type AuthResponse = {
  token: string;
  roleResponse: {
    id: number;
    name: string;
  };
};
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_API.PROFILE}/api/v1/auth`,
  }),

  endpoints: (build) => ({
    authUser: build.mutation<
      AuthResponse,
      { username: string; password: string }
    >({
      query: ({ username, password }) => ({
        url: "/sign-in",
        method: "POST",
        body: {
          username,
          password,
        },
      }),
    }),
  }),
});

export const { useAuthUserMutation } = authApi;
