import logo from "../Images/WSTQlogo.png"
import '../SASS/NewQuote.scss';
import {NavLink} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Quote from './Quote'
import axios from 'axios';

function NewQuote() {
    const [newQuote, setNewQuote] = useState({title: '', text_body: '', img_url: ''})
    // useEffect(() => {
    //     ne
    // })
    const addQuote = () => {
        axios.post("https://quotesdjango.herokuapp.com/quotes/", newQuote)
        .then( res => console.log(res, 'this is the response'))
        .catch(err => console.log(err, 'error'))
    }

    return (
        <div>
            <h1>New Quote</h1>
            <form>
            <input placeholder="author" type="text" value={newQuote.title} onChange={e => setNewQuote({...newQuote, title: e.target.value})}/>
            <input placeholder="quote" type="text" value={newQuote.quote} onChange={e => setNewQuote({...newQuote, text_body: e.target.value})}/>
            <input placeholder="url" type="text" value={newQuote.url} onChange={e => setNewQuote({...newQuote, img_url: e.target.value})}/>
            </form>
            <NavLink activeClassName="selected" to="/quotes">
            <button onClick={addQuote}>ADD</button>
            </NavLink>
        </div>
    );
  }
  
  export default NewQuote;
  