import logo from "../Images/WSTQlogo.png"
import '../SASS/NewQuote.scss';
import {NavLink} from 'react-router-dom';
import {TextInput, FormGroup, Button} from 'carbon-components-react'

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
        <div className="mainForm">
            <FormGroup className="formGrouping" legendText="Add New Quote">
                <TextInput className="newQuoteInput" labelText="author input" id="author" placeholder="author" type="text" value={newQuote.title} onChange={e => setNewQuote({...newQuote, title: e.target.value})} />
                <TextInput className="newQuoteInput" labelText="quote input" id="quote" placeholder="quote" type="text" value={newQuote.quote} onChange={e => setNewQuote({...newQuote, text_body: e.target.value})} />
                <TextInput className="newQuoteInput" labelText="image url input" id="url" placeholder="url" type="text" value={newQuote.url} onChange={e => setNewQuote({...newQuote, img_url: e.target.value})} />
            </FormGroup>
            <NavLink activeClassName="selected" className='submit' to="/quotes">
            <Button kind="tertiary" id="submit-new" onClick={addQuote}>Submit</Button>
            </NavLink>
        </div>
    );
  }
  
  export default NewQuote;
  