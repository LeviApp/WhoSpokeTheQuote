import logo from "../Images/WSTQlogo.png"
import '../SASS/QuoteSelect.scss';
import React, {useState} from 'react';
import { Button, Modal } from 'carbon-components-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function QuoteSelect(props) {
 
    return (
        <button className={`singleQuoteSelect ${props.selected === true ? 'correct' : props.selected === false ? 'incorrect' : ''}`} onClick={() => props.matchingQuote(props.total)} disabled={props.selected}>
            <img src={props.url} alt=""></img>
            <section>
            <h2>{props.author}</h2>
            
            </section>
        </button>
    );
  }
  
  export default QuoteSelect;
  