import logo from "../Images/WSTQlogo.png"
import '../SASS/NewQuote.scss';
import {NavLink} from 'react-router-dom';
import {TextInput, FormGroup, Button} from 'carbon-components-react'

import React, {useState, useEffect} from 'react';
import {useHistory } from "react-router-dom";

import Quote from './Quote'
import axios from 'axios';

function EditQuote() {
    const history = useHistory();
    // Levi Appenfelder 05/18/2021 - to get a value from a previous tab, useHistory is used. Inside history is location, and inside location is pathway and state
    const [editQuote, setEditQuote] = useState({title: history.location.state.title, text_body: history.location.state.text_body, img_url: history.location.state.img_url});
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     ne
    // })
    // const addQuote = () => {
    //     axios.post("https://quotesdjango.herokuapp.com/quotes/", newQuote)
    //     .then( res => console.log(res, 'this is the response'))
    //     .catch(err => console.log(err, 'error'))
    // }

    useEffect(() => {
        console.log(history)
        setLoading(false)
    }, [loading])
    return (
        <div className="mainForm">
            
            <FormGroup className="formGrouping" legendText="Edit Quote">
                <TextInput className="newQuoteInput" labelText="author input" id="author" type="text" value={editQuote.title} onChange={e => setEditQuote({...editQuote, title: e.target.value})} />
                <TextInput className="newQuoteInput" labelText="quote input" id="quote" type="text" value={editQuote.text_body} onChange={e => setEditQuote({...editQuote, text_body: e.target.value})} />
                <TextInput className="newQuoteInput" labelText="image url input" id="url" type="text" value={editQuote.img_url} onChange={e => setEditQuote({...editQuote, img_url: e.target.value})} />
            </FormGroup>
            {/* <NavLink activeClassName="selected" className='submit' to="/quotes">
            <Button kind="tertiary" id="submit-new" onClick={addQuote}>Submit</Button>
            </NavLink> */}
        </div>
    );
  }
  
  export default EditQuote;
  