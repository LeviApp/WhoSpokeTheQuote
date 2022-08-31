import logo from "../Images/WSTQlogo.png"
import '../SASS/NewQuote.scss';
import {Link} from 'react-router-dom';
import {TextInput, FormGroup, Button} from 'carbon-components-react'

import React, {useState, useEffect} from 'react';
import {useHistory } from "react-router-dom";

import Quote from './Quote'
import axios from 'axios';

function EditQuote() {
    const history = useHistory();
    // Levi Appenfelder 05/18/2021 - to get a value from a previous tab, useHistory is used. Inside history is location, and inside location is pathway and state
    const [edittedQuote, setEditQuote] = useState({title: history.location.state.title, text_body: history.location.state.text_body, img_url: history.location.state.img_url});
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     ne
    // })
    const editQuote = () => {

        const title = edittedQuote.title;
        const text_body = edittedQuote.text_body;
        let img_url;
        if (edittedQuote.img_url !== "" || edittedQuote.img_url.includes('.jpg') || edittedQuote.img_url.includes('.png') || edittedQuote.img_url.includes('.jpeg') || edittedQuote.img_url.includes('.gif')) {
            img_url = edittedQuote.img_url
        }
        else {
            img_url = "https://i0.wp.com/www.beerleagueheroes.com/wp-content/uploads/2019/04/mystery-person-png-mystery-customer-person-9LKwzI-clipart.png?fit=750%2C481&ssl=1"
        }
    // Levi Appenfelder 05/18/2021 - Consider the REST api operations, this api is set up to use patch.
        axios.patch(`https://quotesdjango.up.railway.app/quotes/${history.location.state.id}/`, {title,text_body, img_url})
        .then( response => {
            console.log('editted the quote')
            history.goBack()
        })
        .catch(err => console.log('this is the error', err))
    }

    useEffect(() => {
        console.log(history)
        setLoading(false)
    }, [loading])
    return (
        <div className="mainForm">
            <div className='insideForm'>
            <FormGroup className="formGrouping" legendText="Edit Quote">
                <TextInput className="newQuoteInput" labelText="author input" id="author" type="text" value={edittedQuote.title} onChange={e => setEditQuote({...edittedQuote, title: e.target.value})} />
                <TextInput className="newQuoteInput" labelText="quote input" id="quote" type="text" value={edittedQuote.text_body} onChange={e => setEditQuote({...edittedQuote, text_body: e.target.value})} />
                <TextInput className="newQuoteInput" labelText="image url input" id="url" type="text" value={edittedQuote.img_url} onChange={e => setEditQuote({...edittedQuote, img_url: e.target.value})} />
            </FormGroup>
            <Button disabled={edittedQuote.title === '' || edittedQuote.text_body === '' ? true:false} kind="tertiary" id="submit-new" onClick={()=> editQuote()}>Submit</Button>
            </div>
        </div>
    );
  }
  
  export default EditQuote;
  