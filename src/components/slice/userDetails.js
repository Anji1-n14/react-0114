import {createSlice} from "@reduxjs/toolkit";
import { use } from "react";


const initialState ={
     articleList : [],
    isLoggedIn : false,
    userdetails : {
      name : "",
      email : "",
      role : ""
},
};

const userDetailsSlice = createSlice({
    name : 'userDetails',
    initialState :initialState,
    reducers :{
        login(state,action){
            state.isLoggedIn = true;
            state.userdetails.name ="Allu";
            state.userdetails.email ="anjiallu@.com";
            state.userdetails.role ="admin";
        },
        logout(state,action){
            state.isLoggedIn = false;
            state.userdetails.name ="";
            state.userdetails.email ="";
            state.userdetails.role ="";
        }
    }
})
export default userDetailsSlice.reducer;
export const {login,logout} =userDetailsSlice.actions;


