import logo from "../Images/WSTQlogo.png"
import '../SASS/Nav.sass';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useState} from 'react';

function NewQuote() {
    const [newQuote, setQuotes] = useState({author: '', quote: '', url: ''})

    return (
        <div>
            <h1>NewQuote</h1>
            <input type="text" value={newQuote.author} onChange={e => setQuotes({...newQuote, author: e.target.value})}/>
            <input type="text" value={newQuote.quote} onChange={e => setQuotes({...newQuote, quote: e.target.value})}/>
            <input type="text" value={newQuote.url} onChange={e => setQuotes({...newQuote, url: e.target.value})}/>
            <img src={newQuote.url}/>
            <h2>{newQuote.author}</h2>
            <p>{newQuote.quote}</p>

        </div>
    );
  }
  
  export default NewQuote;
  