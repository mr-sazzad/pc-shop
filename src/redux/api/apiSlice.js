import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pcApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName:
      builder.query <
      Pokemon({
        query: (name) => `pokemon/${name}`,
      }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
