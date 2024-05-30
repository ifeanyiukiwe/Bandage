import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getSomeData: builder.query({
      query: () => "some-endpoint",
    }),
  }),
});

export const { useGetSomeDataQuery } = apiSlice;
