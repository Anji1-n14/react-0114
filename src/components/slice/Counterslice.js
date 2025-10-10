import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count : 0,
}
export const counterSlice = createSlice({
    name : 'counter',
    initialState :initialState,
    reduceers : {
        increament : (state,action) =>{
          state.count +=1;
        },
        decreament : (state,action)=>{
            state.count-=1;
        }
    }
})
export default counterSlice.reducer;
export const {increament,decreament} = counterSlice.actions;