import { createSlice } from "@reduxjs/toolkit"

const initialState={
    selectedOptions:[],
    textFieldValue:'', 
}

const checkBoxSlice=createSlice({
    name:"checkbox",
    initialState,
    reducers:{
      setCheckedBoxOptions: (state, action) => {
        const { value, checked } = action.payload;
    
        if (checked) {
            state.selectedOptions = [...state.selectedOptions, value];
            } else {
            state.selectedOptions = state.selectedOptions.filter(
            (option) => option !== value
            );
        }
        state.textFieldValue = state.selectedOptions.join(" , ");
        }, 
  // Update the text field value with the selected options
      setTextFieldValue:(state,action)=>{
        state.textFieldValue=action.payload;
      }
    }
})
export const {setCheckedBoxOptions,setTextFieldValue}=checkBoxSlice.actions;
export const selectBox =(state)=>state.checkbox ;
export default checkBoxSlice.reducer;