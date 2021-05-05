import logo from "../Images/WSTQlogo.png"
import '../SASS/Nav.sass';
import {BrowserRouter as NavLink} from 'react-router-dom';
import Quote from './Quote'
import React, {useState} from 'react';

function Quotes() {
    const [quotes, setQuotes] = useState([])
    return (
        <div>
            <h1>Quotes</h1>
            <input type="text" value={quotes.author} onChange={e => setQuotes({...quotes, author: e.target.value})}/>
            <input type="text" value={quotes.quote} onChange={e => setQuotes({...quotes, quote: e.target.value})}/>
            <input type="text" value={quotes.url} onChange={e => setQuotes({...quotes, url: e.target.value})}/>
        </div>
    );
  }
  
  export default Quotes;
  