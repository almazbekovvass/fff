import {createSlice} from "@reduxjs/toolkit";


const userSlice= createSlice(
    {
        name:'user',
        initialState: {
            user: {
                name: '',
                age: '',
                gender: ''
            }
        },
        reducers:{
            changeName:(state, action) =>{
                state.name= action.payload
            },
            changeAge:(state, action) =>{
                state.age= action.payload
            },
            changeGender:(state, action) =>{
                state.gender= action.payload
            }

        }
    }
)
export const userReducer=userSlice.reducer
export const {changeName, changeAge, changeGender} = userSlice.actions