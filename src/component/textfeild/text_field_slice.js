import { createSlice } from "@reduxjs/toolkit";

const initialState={
    inputDate:'',
    orderList:[],
}
const textSlice=createSlice({
    name:'Text',
    initialState,
    reducers:{
        setInputDate:(state,action)=>{
         state.inputDate=action.payload
        },
        addOrderItem:(state)=>{
         if (state.inputDate!==''){
            state.orderList.push({item:state.inputDate});
            state.inputDate ='';
         }
        },
        deleteOrderItem:(state,action)=>{
          state.orderList.splice(action.payload, 1);
        }
    }    
})
// Export actions and selectors
export const {setInputDate,addOrderItem,deleteOrderItem}=textSlice.actions;
export const selectText = (state) => state.Text;
export default textSlice.reducer