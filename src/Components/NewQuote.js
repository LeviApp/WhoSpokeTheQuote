import logo from "../Images/WSTQlogo.png"
import '../SASS/NewQuote.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Quote from './Quote'

function NewQuote() {
    const [newQuote, setNewQuotes] = useState({author: '', quote: '', url: ''})

    const [quotes, setQuotes] = useState([])
    // useEffect(() => {
    //     ne
    // })
    const addQuote = () => {
        setQuotes([...quotes, newQuote])
    }
    return (
        <div>
            <h1>New Quote</h1>
            
            <input placeholder="author" type="text" value={newQuote.author} onChange={e => setNewQuotes({...newQuote, author: e.target.value})}/>
            <input placeholder="quote" type="text" value={newQuote.quote} onChange={e => setNewQuotes({...newQuote, quote: e.target.value})}/>
            <input placeholder="url" type="text" value={newQuote.url} onChange={e => setNewQuotes({...newQuote, url: e.target.value})}/>
            <button onClick={addQuote}>ADD</button>
            <section>
            {quotes.map( quote => {
                return <Quote author={quote.author} quote={quote.quote} url={quote.url} />
            })}
            </section>
        </div>
    );
  }
  
  export default NewQuote;
  