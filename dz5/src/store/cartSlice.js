import {createSlice} from "@reduxjs/toolkit";


const cartSlice= createSlice(
    {
        name:'cart',
        initialState:{
            product:[]
        },
        reducers:{
            addProducts:(state, action) =>{
                const existingProduct=state.product.find(el =>el._id=== action.payload._id)
                existingProduct ? existingProduct.quantity++ : state.product.push({...action.payload, quantity:1})
            }
        }
    }
)
export const cartReducer= cartSlice.reducer
export const {addProducts}= cartSlice.actions