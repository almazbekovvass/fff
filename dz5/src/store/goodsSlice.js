import {createSlice} from "@reduxjs/toolkit";
import productData from '../json/product.json'



const goodsSlice= createSlice(
    {
        name:'goods',
        initialState:{
            product:productData,
            counter:0,
            quantity:1
        },
        reducers:{
            increaseCounter:(state) =>{
                state.counter+=1
            }
        }
    }

)
export const goodsReducer= goodsSlice.reducer
export const {increaseCounter}= goodsSlice.actions