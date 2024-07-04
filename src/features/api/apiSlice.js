import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7134/api" }),
    endpoints: (builder) => ({
        getMusteriler: builder.query({
            query: () => "Musteri",
        }),
        addMusteri: builder.mutation({
            query: (newMusteri) => ({
                url: "Musteri",
                method: "POST",
                body: newMusteri,
            }),
        }),
    }),
});

export const {
    useGetMusterilerQuery,
    useAddMusteriMutation,
} = apiSlice;
export default apiSlice.reducer;
