import React from 'react';
import './style.css'

import { useDispatch, useSelector } from 'react-redux';
import { selectRadio, setRadioOption, setTextFieldValue } from './radio_slice';

const Radio_view = () => {
 const dispatch=useDispatch();
 const {selectedOption,textFieldValue}=useSelector(selectRadio)
 
 const handleRadioButtonChange = (event)=>{
   dispatch((setRadioOption(event.target.value)))
 }
 const handleTextFieldChange=(event)=>{
  dispatch((setTextFieldValue(event.target.value)))
 }
  return (
    <div className='container text-center edit'>
        <div className="form-check">
          <input className="form-check-input" type="radio"
          value="react.js"
          checked={selectedOption === 'react.js'}
          onChange={handleRadioButtonChange} 
          id="flexRadioDefault1"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            react.js
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" 
          value="Angler.js"
          checked={selectedOption === 'Angler.js'}
          onChange={handleRadioButtonChange} 
          id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Angler.js
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" 
          value="vue.js"
          checked={selectedOption === 'vue.js'}
          onChange={handleRadioButtonChange}
           id="flexRadioDefault3" />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            vue.js
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" 
          value="none"
          checked={selectedOption === 'none'}
          onChange={handleRadioButtonChange}
           id="flexRadioDefault4" />
          <label className="form-check-label" htmlFor="flexRadioDefault4">
            مش هذاكر اصلا
          </label>
        </div>

        <input
          type="text"
          className="form-control"
          value={textFieldValue}
          onChange={handleTextFieldChange}
        />
      <p>----------------------------------------------------------------------------------</p>
  </div>
  )
}

export default Radio_view
