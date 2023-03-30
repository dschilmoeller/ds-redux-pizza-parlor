import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetchPizza();
  })



const fetchPizza = () => {
  console.log('inside fetchPizza()')
  axios.get('/api/pizza')
  .then(response => {
    dispatch({ type: 'GET_PIZZA', payload: response.data})
  })
  .catch(error => {
    console.log('error')
  })
}




  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      {/* Get pizza list and display */}
      <PizzaList />

      {/* Customer Form */}

      {/* Checkout */}

      {/* Admin */}
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
