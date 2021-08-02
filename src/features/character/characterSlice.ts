import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Character {
    results: {
        id: number;
        name: string;
        species: string;
        status?: string;
        image: string;
        gender: string;
      location: {
          name: string;
        }
    }[];
}

// Define a service using a base URL and expected endpoints
export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character, number>({
      query: () => `character/`,
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
    getCharacterByName: builder.query<Character, string>({
      query: (name) => `character/?name=${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharactersQuery } = characterApi
export const { useGetCharacterByIdQuery } = characterApi
export const { useGetCharacterByNameQuery } = characterApi