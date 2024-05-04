import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product:[],
    buskets:[],
    value: 0
}
export const fetchGoods= createAsyncThunk(
    'goods/fetchGoods',
    async function (info,{dispatch, RejectedWithValue}){
        const response = await axios.get('https://dummyjson.com/products')
        dispatch(addGood(response.data))
})


const goodsSlice= createSlice({
        name:'goods',
        initialState,
        reducers:{
            addGood:(state, action) =>{
                state.product = action.payload
            },
            addBusket:(state, action) => {
                const IndexFound = state.buskets.findIndex(product=> product.id === action.payload.id)
                if(IndexFound !== -1 ) {
                    state.buskets[IndexFound] = {...state.buskets[IndexFound],count: state.buskets[IndexFound].count+1}
                }else {
                    state.buskets.push({...action.payload,count: 1})
                }
            },
            // removeBusketProduct:(state, action) =>{
            //     state.buskets[action.payload].push(action.payload.count-1)
            // },
            increment:(state, action) => {
                state.value += action.payload
            },
            decrement:(state, action) => {
                state.value -= action.payload
            }
        },

    }
)
export const {increment,decrement,addBusket,addGood,removeBusketProduct} =goodsSlice.actions
export const goodsReducer= goodsSlice.reducer
