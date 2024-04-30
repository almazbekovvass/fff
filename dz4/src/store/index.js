import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./userSlice.js";
import {apiUserReducer} from "./apiUserSlice.js";


export const store= configureStore(
    {
        reducer:{
            user:userReducer,
            apiUser:apiUserReducer
        }
    }
)