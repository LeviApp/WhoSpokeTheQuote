import logo from "../Images/WSTQlogo.png"
import '../SASS/Quotes.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import Quote from './Quote'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
function Quotes() {

    const [quotes, setQuotes] = useState([])


    useEffect(() => {
        axios.get("https://quotesdjango.herokuapp.com/quotes/")
        .then( res => setQuotes(res.data))
        .catch(err => console.log(err, 'error'))

        return () => {
            console.log('unmounted')
        }
    }, [])
    return (
        <div>
            {quotes.map( quote => {
                return <Quote key={quote.id} author={quote.title} quote={quote.text_body} url={quote.img_url} />
            })}
        </div>
    );
  }
  
  export default Quotes;
  