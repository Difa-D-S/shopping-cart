import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action){
            // console.log(action.payload);
            const updatedCartList = state.cartList.concat(action.payload)
            const newtotal = state.total + action.payload.price
            return { ...state, cartList: updatedCartList, total: newtotal }
        },
        remove(state, action){
            // console.log(action.payload)
            const updatedCartList = state.cartList.filter(product => product.id !== action.payload.id)
            const newtotal = state.total - action.payload.price
            return {...state, cartList: updatedCartList, total: newtotal}
        }
    }
})

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;