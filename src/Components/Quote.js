import logo from "../Images/WSTQlogo.png"
import '../SASS/Quote.scss';
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
            <div className="quoteButtons">
            <Link className="quoteLink" key={`link-${props.ID}`} to={`/quotes/${props.ID}`}>
            <Button kind="tertiary" id="open-button">Open</Button>
            </Link>
            <Button className="otherButtons" kind="tertiary" id="edit-button">Edit</Button>
            <Button className="otherButtons" kind="tertiary" id="button-delete">Delete</Button>
            </div>
            </section>
        </div>
    );
  }
  
  export default Quote;
  