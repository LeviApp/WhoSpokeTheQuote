import logo from "../Images/WSTQlogo.png"
import '../SASS/Quote.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import { Button } from 'carbon-components-react';

function SingleQuote(props) {
    return (
        <div className='singleContainer'>
            
            <img src={props.url} />
            <h2>Loaded</h2>
            <p>{props.quote}</p>
        </div>
    );
  }
  
  export default SingleQuote;
  