import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderItem, deleteOrderItem, setInputDate, selectText } from './text_field_slice';
import "./style.css"
const TextfeildView = () => {
    const dispatch=useDispatch();
    const { inputDate, orderList } = useSelector(selectText);

      // Handle input change event
    const handleInputChange =(event)=>{
     dispatch(setInputDate(event.target.value));
    };
      // Handle add item button click
    const handleAddOrderItem  =()=>{
     dispatch(addOrderItem())   
    };
     // Handle delete item button click
    const handleDeleteItem=(index)=>{
     dispatch(deleteOrderItem(index))
    };

  return (
    <div className='container text-center content'>
        <input className='form-control'
               type='text'
               value={inputDate} 
               onChange={handleInputChange}
        />
        <button className="btn btn-success" onClick={handleAddOrderItem}>Add Item</button>
        <ol className="list-group list-group-numbered">
          {orderList.map((item, index) => (
            <li key={index} className="list-group-item d-flex">
              {item.item}
              <button className="btn btn-danger" onClick={() => handleDeleteItem(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      <p>-----------------------------------------------------------------------------------</p>
    </div>
  )
}

export default TextfeildView
