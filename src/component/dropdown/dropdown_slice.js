import { createSlice } from "@reduxjs/toolkit";

const initialState={
    textField:" "
}
const dropdownSlice=createSlice({
    name:"Dropdown",
    initialState,
    reducers:{
        setTextField:(state , action)=>{
         state.textField =action.payload
        }
    }
})
export const {setTextField}=dropdownSlice.actions;
export const selectDropdown = (state) => state.Dropdown;
export default dropdownSlice.reducer;