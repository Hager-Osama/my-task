import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectedOption:'',
    textFieldValue:'',
}
 const radioSlice=createSlice({
   name:"radio",
   initialState ,
   reducers:{
    setRadioOption:(state, action)=>{
        state.selectedOption = action.payload;
        state.textFieldValue = action.payload; // Update text field value based on selected option
    },
    setTextFieldValue: (state, action) => {
        state.textFieldValue = action.payload;
    },
    }
   })
   export const{setRadioOption,setTextFieldValue}=radioSlice.actions;
   export const selectRadio =(state)=>state.radio;
   export default radioSlice.reducer;