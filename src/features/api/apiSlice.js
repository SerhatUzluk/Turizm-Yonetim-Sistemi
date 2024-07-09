import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7134/api' }),
  endpoints: (builder) => ({
    getMusteriler: builder.query({
      query: () => 'Musteriler',
    }),
    addMusteri: builder.mutation({
      query: (newMusteri) => ({
        url: '/Musteri/register',
        method: 'POST',
        body: newMusteri,
      }),
    }),
    login: builder.mutation({
      query: (loginInformation) => ({
        url: '/Musteri/login',
        method: 'POST',
        body: loginInformation,
      }),
    }),
  }),
});

export const {
  useGetMusterilerQuery,
  useAddMusteriMutation,
  useLoginMutation,
} = apiSlice;
export default apiSlice.reducer;