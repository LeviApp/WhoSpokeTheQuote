import logo from "../Images/WSTQlogo.png"
import '../SASS/Quotes.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import Quotes from './Quotes'
import React, {useState, useEffect, useReducer} from 'react';

const initialState = 0
const reducer = (state, action) => {

    switch(action) {
        case '+':
            return state+1
        case '-':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }

}
function MouseIf() {

   const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <button onClick={()=> dispatch('+')}>+</button>
            <button onClick={()=> dispatch('-')}>-</button>
            <button onClick={()=> dispatch('reset')}>RESET</button>

            <h1>{count}</h1>
        </div>
    );
  }
  
  export default MouseIf;
  