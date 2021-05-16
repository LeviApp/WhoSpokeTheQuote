import logo from "../Images/WSTQlogo.png"
import '../SASS/Quote.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import { Button } from 'carbon-components-react';
import {Link} from 'react-router-dom';
function Quote(props) {
    return (
        <div className="singleQuote">
            <img src={props.url} alt=""></img>
            <section>
            <h2>{props.author}</h2>
            <h4>{props.quote}</h4>
            <Link className="quoteLink" key={`link-${props.ID}`} to={`/quotes/${props.ID}`}>
            <Button kind="tertiary" id="button-i">Open</Button>
            </Link>
            </section>
        </div>
    );
  }
  
  export default Quote;
  