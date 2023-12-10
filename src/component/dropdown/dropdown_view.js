import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectDropdown, setTextField } from './dropdown_slice';
import Dropdown from 'react-bootstrap/Dropdown';


const DropdownView = () => {
  const dispatch=useDispatch();
  const { textField } = useSelector(selectDropdown);
  const handelTextFieldChange=(eventKey)=>{
   dispatch((setTextField(eventKey)));
  }
  return (
    <div className='container text-center edit'>
    <Dropdown onSelect={handelTextFieldChange}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
        <Dropdown.Item eventKey="Another action">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <br/>
    <input
      className="form-control"
      type="text"
      readOnly={true}
      value={textField}
      onChange={(event) => setTextField(event.target.value)}
    />
    <p>-----------------------------------------------------------------------------</p>
  </div>
  )
}

export default DropdownView
