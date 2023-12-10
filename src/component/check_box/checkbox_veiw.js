import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBox, setCheckedBoxOptions, setTextFieldValue } from './checkbox_slice';

const CheckBoxView = () => {
  const dispatch= useDispatch();
  const {selectedOptions,textFieldValue}=useSelector(selectBox);
  
  const handelCheckBoxChange =(event)=>{
    const { value, checked } = event.target;
    dispatch(setCheckedBoxOptions({ value, checked }));
  }
  const handleTextFieldChange=(event)=>{
    dispatch((setTextFieldValue(event.target.value)))  
}

  return (
    <div className='container text-center edit'>
     <div className="form-check">
        <input className="form-check-input" type="checkbox" value="AbdelRahman"
         checked={selectedOptions.includes("AbdelRahman")}
         onChange={handelCheckBoxChange}
         id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
           AbdelRahman
        </label>
     </div>
     <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Mohsen" 
         checked={selectedOptions.includes("Mohsen")}
         onChange={handelCheckBoxChange}
         id="flexCheckChecked"/>
        <label className="form-check-label" htmlFor="flexCheckChecked">
            Mohsen
        </label>
     </div>
     <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Ahmed"
         checked={selectedOptions.includes("Ahmed")}
         onChange={handelCheckBoxChange}
         id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
           Ahmed
        </label>
     </div>
     <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Hagar" 
         checked={selectedOptions.includes("Hagar")}
         onChange={handelCheckBoxChange}
         id="flexCheckChecked"/>
        <label className="form-check-label" htmlFor="flexCheckChecked">
            Hagar
        </label>
     </div>
     <input 
     type='text'
     className="form-control"             
     value={textFieldValue}
     onChange={handleTextFieldChange}            
     />
     <p>-----------------------------------------------------------------------------------</p>
    </div>
  )
}

export default CheckBoxView
