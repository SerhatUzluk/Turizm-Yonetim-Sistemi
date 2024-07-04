import apiSlice from "../apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMusteriler: builder.query({
      query: () => 'Musteri',
    }),
    addMusteri: builder.mutation({
      query: (newMusteri) => ({
        url: 'Musteri',
        method: 'POST',
        body: newMusteri,
      }),
    }),
    updateMusteri: builder.mutation({
      query: (updatedMusteri) => ({
        url: `Musteri/${updatedMusteri.id}`,
        method: 'PUT',
        body: updatedMusteri,
      }),
    }),
    deleteMusteri: builder.mutation({
      query: (id) => ({
        url: `Musteri/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetMusterilerQuery,
  useAddMusteriMutation,
  useUpdateMusteriMutation,
  useDeleteMusteriMutation,
} = usersApi;
