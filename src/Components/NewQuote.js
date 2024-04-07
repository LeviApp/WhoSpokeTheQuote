import logo from "../Images/WSTQlogo.png"
import '../SASS/NewQuote.scss';
import {NavLink} from 'react-router-dom';
import {TextInput, FormGroup, Button} from 'carbon-components-react'

import React, {useState, useEffect} from 'react';
import Quote from './Quote'
import axios from 'axios';

function NewQuote() {
    const [newQuote, setNewQuote] = useState({title: '', text_body: '', img_url: ''})
    const [ready, setReady] = useState(false)


    // useEffect(() => {
    //     ne
    // })
    const addQuote = () => {
        let completeQuote = newQuote;
        if (completeQuote.img_url === '' || 
        (!completeQuote.img_url.includes('.jpg') && 
         !completeQuote.img_url.includes('.png') && 
         !completeQuote.img_url.includes('.jpeg') && 
         !completeQuote.img_url.includes('.gif'))) {
        completeQuote.img_url = "https://i0.wp.com/www.beerleagueheroes.com/wp-content/uploads/2019/04/mystery-person-png-mystery-customer-person-9LKwzI-clipart.png?fit=750%2C481&ssl=1";
    }
        axios.post("https://quotesdjango.onrender.com/quotes/", completeQuote)
        .then( res => console.log(res, 'this is the response'))
        .catch(err => console.log(err, 'error'))
    }

    return (
        <div className="mainForm">
            <div className='insideForm'>
            <FormGroup className="formGrouping" legendText="Add New Quote">
                <TextInput className="newQuoteInput" labelText="author input" id="author" placeholder="author" type="text" value={newQuote.title} onChange={e => {
                    setNewQuote({...newQuote, title: e.target.value})
                }
                    } />
                <TextInput className="newQuoteInput" labelText="quote input" id="quote" placeholder="quote" type="text" value={newQuote.quote} onChange={e => setNewQuote({...newQuote, text_body: e.target.value})} />
                <TextInput className="newQuoteInput" labelText="image url input" id="url" placeholder="url" type="text" value={newQuote.url} onChange={e => setNewQuote({...newQuote, img_url: e.target.value})} />
            </FormGroup>
            <NavLink activeClassName="selected" className='submit' to="/quotes">
            <Button disabled={newQuote.title === '' || newQuote.text_body === '' ? true:false} kind="tertiary" id="submit-new" onClick={addQuote}>Submit</Button>
            </NavLink>
            </div>
        </div>
    );
  }
  
  export default NewQuote;
  