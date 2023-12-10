import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter_slice";
import textSlice from "./textfeild/text_field_slice";
import radioSlice from "./radio/radio_slice";
import checkBoxSlice from "./check_box/checkbox_slice";
import dropdown_slice from "./dropdown/dropdown_slice";

const store=configureStore(
    {
        reducer:{
            counter:counterSlice,
            Text: textSlice,
            radio:radioSlice,
            checkbox:checkBoxSlice,
            Dropdown:dropdown_slice
        }
    }
)
export default store;