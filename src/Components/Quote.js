import logo from "../Images/WSTQlogo.png"
import '../SASS/Quote.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import { Button } from 'carbon-components-react';

function Quote(props) {
    return (
        <div className="singleQuote">
            <img src={props.url} alt=""></img>
            <section>
            <h2>{props.author}</h2>
            <h4>{props.quote}</h4>
            <Button kind="tertiary" id="button-i">Open</Button>
            </section>
        </div>
    );
  }
  
  export default Quote;
  