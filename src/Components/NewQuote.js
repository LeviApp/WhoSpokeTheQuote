import logo from "../Images/WSTQlogo.png"
import '../SASS/Nav.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useState} from 'react';

function NewQuote() {
    const [newQuote, setNewQuotes] = useState({author: '', quote: '', url: ''})

    return (
        <div>
            <h1>New Quote</h1>
            <input type="text" value={newQuote.author} onChange={e => setNewQuotes({...newQuote, author: e.target.value})}/>
            <input type="text" value={newQuote.quote} onChange={e => setNewQuotes({...newQuote, quote: e.target.value})}/>
            <input type="text" value={newQuote.url} onChange={e => setNewQuotes({...newQuote, url: e.target.value})}/>
            <img src={newQuote.url}/>
            <h2>{newQuote.author}</h2>
            <p>{newQuote.quote}</p>

        </div>
    );
  }
  
  export default NewQuote;
  