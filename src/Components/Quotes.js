import logo from "../Images/WSTQlogo.png"
import '../SASS/Quotes.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import Quote from './Quote'
import React, {useState} from 'react';

function Quotes() {
    const [quotes, setQuotes] = useState([])

    const addQuote = () => {
        setQuotes([...quotes, {
            id: quotes.length,
            value: 4*quotes.length
        }])
    }
    return (
        <div>
            <h1>Quotes</h1>
            <button onClick={addQuote}>Add</button>
            
            {quotes.map( quote => {
                return <Quote key={quote.id} value={quote.value} />
            })}
        </div>
    );
  }
  
  export default Quotes;
  