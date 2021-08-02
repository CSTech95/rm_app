import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Mycharacters {
    results: {
        id?: number;
        name?: string;
        species?: string;
        status?: string;
        image?: string;
        gender?: string;
      location?: {
          name?: string;
        }
    }[];
}


const initialState: Mycharacters = {
    results: []
}


const sidebarSlice = createSlice({
    name: 'mycharacters',
    initialState,
    reducers: {
        //add a character
        addCharacter: (state: any, action: any) => {
            state.results.push(action.payload)
            
      },
        // delete a character
        deleteCharacter(character: object) {
            console.log(character)
      },
    },
})

export const { addCharacter, deleteCharacter } = sidebarSlice.actions
export default sidebarSlice.reducer