import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { decrease, increase, increaseByFive } from './counter_slice';
import Button from 'react-bootstrap/Button';

const CounterDesign = () => {

const dispatch= useDispatch();
const count = useSelector(state=>{
    return state.counter.count
})
//طول ما الكاونت اكبر من 0 رجعلى الفانكشن ال اسمها دكريز لو كانت اقل مترجعليش حاجه 
const handleDecrease = () => {
    if (count > 0) {
      dispatch(decrease());
    }}
  return (
    <Container className="text-center">
      <h1>{count}</h1>
      <Button variant="primary" className='m-2' onClick={()=>(dispatch(increase()))}>increase</Button> 
      <Button variant="primary" className='m-2' onClick={handleDecrease}>decreasecrease</Button>
      <Button variant="primary" className='m-2' onClick={()=>(dispatch(increaseByFive(5)))}>increase Five</Button>
      <p>------------------------------------------------------------------------</p>
    </Container>
  )
}

export default CounterDesign
