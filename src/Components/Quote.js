import logo from "../Images/WSTQlogo.png"
import '../SASS/Quote.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useState} from 'react';

function Quote(props) {
    return (
        <div>
            <h2>{props.key}</h2>
            <h4>{props.value}</h4>

        </div>
    );
  }
  
  export default Quote;
  