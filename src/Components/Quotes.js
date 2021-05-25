import logo from "../Images/WSTQlogo.png"
import '../SASS/Quotes.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import Quote from './Quote'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Loading} from 'carbon-components-react'

function Quotes() {

    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleting, setDeleting] = useState(false)

    const cancelDelete = (bool) => {
        console.log('cancel loading working')
        setDeleting(bool)

    }
    const deleteQuote = (value) => {
        setLoading(true)
        setDeleting(false)
        console.log('inside function, delete')
        axios.delete(`https://quotesdjango.herokuapp.com/quotes/${value}/`)
        .then(response => {
          console.log('quote was successfully deleted')
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("https://quotesdjango.herokuapp.com/quotes/")
        .then( res => {
            console.log('inside quotes')
            setQuotes(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err, 'error'))
        // Levi Appenfelder 05/15/2021 - the return value unmounts the component
        return () => {
            console.log('unmounted')
        }
        // Levi Appenfelder 05/15/2021 - an empty array causes useEffect to run only once, an array with values in it will allow the runEffect to run only when those values are changed.
    }, [loading])

    return (
        <div className='quoteList'>
            {loading ? <Loading /> : quotes.map( quote => {
                return <Quote deleting={deleting} key={quote.id} cancelDelete={cancelDelete} deleteQuote={deleteQuote} ID={quote.id} total={quote} author={quote.title} quote={quote.text_body} url={quote.img_url} />
            })}
        </div>
    );
  }
  
  export default Quotes;
  