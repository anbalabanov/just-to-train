import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: number;
};

export const stationApi = createApi({
  reducerPath: "stationApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getStations: builder.query<User[], null>({
      query: () => "users",
    }),
    getStationById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetStationsQuery, useGetStationByIdQuery } = stationApi;
