import logo from "../Images/WSTQlogo.png"
import '../SASS/Quotes.scss';
import '../SASS/QuotesGame.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import QuoteSelect from './QuoteSelect'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Loading} from 'carbon-components-react'

function QuotesGame() {

    const [quotes, setQuotes] = useState([])
    const [guessQuotes, setGuessQuotes] = useState([])
    const [guessQuote, setGuessQuote] = useState({})
    const [loading, setLoading] = useState(true)
    const [score, setScore] = useState(0)

    const selectRandomQuote = async (quoteArray) => {
        console.log({quoteArray})
        let randomNum = Math.floor(Math.random() * (quoteArray.length));
        console.log({randomNum})
        return quoteArray[randomNum]
    }

    const matchingQuote = async (quote) => {
        if (quote.text_body === guessQuote.text_body) {
            let newScore = score + 1;
            setScore(newScore);
            
            let updatedQuotes = quotes.map(q => {
                if (q.id === quote.id) {
                    return { ...q, correct: true }; // Return the updated quote object
                }
                return q; // Return the original quote object if it doesn't need to be updated
            });
            let guessedQuotes = guessQuotes.filter(q => q.id !== quote.id)
            setGuessQuotes(guessedQuotes)
            console.log("CLICKED OUTSIDE", updatedQuotes)
            setQuotes(updatedQuotes)

            const selectedQuote = await selectRandomQuote(guessedQuotes);
            console.log({selectedQuote})
            if (selectedQuote) {
                setGuessQuote(selectedQuote)
            }
        }
        else {
            let newScore = score - 1;
            setScore(newScore);
            let updatedQuotes = quotes.map(q => {
                if (q.id === quote.id) {
                    return { ...q, correct: false }; // Return the updated quote object
                }
                return q; // Return the original quote object if it doesn't need to be updated
            });
            setQuotes(updatedQuotes)
            setTimeout(() => {
                resetQuote(quote.id)
            }, 500)
        }
    }

    const resetQuote = (quoteId) => {
        let updatedQuotes = quotes.map(q => {
            if (q.id === quoteId) {
                return { ...q, correct: null }; // Return the updated quote object
            }
            return q; // Return the original quote object if it doesn't need to be updated
        });
        setQuotes(updatedQuotes)
    }


    useEffect(() => {
        axios.get("https://quotesdjango.onrender.com/quotes/")
        .then( async res => {
            console.log('inside quotes game', res.data)
            let newData = res.data.map(quote => ({ ...quote, correct: null }))
            setQuotes(newData)
            setGuessQuotes(res.data)
            const selectedQuote = await selectRandomQuote(res.data)
            console.log({selectedQuote})
            if (selectedQuote) {
                setGuessQuote(selectedQuote)
            }
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
        <div className='quoteGame'>
            <section className='quoteGameGuess'>
            <h2 className="score">{score}</h2>
            <h1>Who spoke this quote?</h1>
            <p>{guessQuote.text_body}</p>
            </section>
            <section className='quoteGameChoice'>
            {loading ? <Loading /> : quotes.map( quote => {
                return <QuoteSelect key={quote.id} guessID={quote.id} total={quote} author={quote.title} quote={quote.text_body} url={quote.img_url} selected={quote.correct} matchingQuote={matchingQuote}/>
            })}
            </section>
        </div>
    );
  }
  
  export default QuotesGame;
  