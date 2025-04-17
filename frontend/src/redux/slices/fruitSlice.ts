import { createSlice } from '@reduxjs/toolkit'

const fruitSlice = createSlice({
    name: 'fruit',
    initialState: {
        fruits: []
    },
    reducers: {
        setFruits: (state:any, action:any) => {
            state.fruits = action.payload
        },
        getAllFruits:(state:any) => {
            state.fruits
        },
        getFruitsByCategory: (state:any, action:any) => {
            state.fruits = action.payload
        },
        
    }
})

export const { setFruits, getAllFruits, getFruitsByCategory } = fruitSlice.actions
export default fruitSlice.reducer