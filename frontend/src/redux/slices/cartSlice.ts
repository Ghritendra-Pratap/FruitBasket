import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        getItems: (state: any, action: any) => {
            state.cartItems = action.payload
        },
        addToCart: (state: any, action: any) => {
            
            state.cartItems.push(action.payload)
        },

        removeFromCart: (state:any, action:any) => {
            state.cartItems = state.cartItems.filter((item:any) => item.id !== action.payload)
        },
        addQuantity: (state:any, action:any) => {
            state.cartItems = state.cartItems.map((item:any) => {
                if (item.id === action.payload && item.quantity > 0) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
        },
        removeQuantity: (state:any, action:any) => {
            state.cartItems = state.cartItems.map((item:any) => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
        }
    }
})

export const { addToCart , removeFromCart, getItems , removeQuantity , addQuantity } = cartSlice.actions
export default cartSlice.reducer