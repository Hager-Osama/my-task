import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}
export const counterSlice=createSlice ({
    name:'counter',
    initialState,
    reducers:{
        increase: (state , action)=>{
            state.count ++;
        },
        decrease:(state , action )=>{
            state.count --;
        },
        increaseByFive: (state , action)=>{
            state.count+= action.payload  ;
        },
        
    }
})
export const {increase,decrease,increaseByFive}=counterSlice.actions;
export default counterSlice.reducer