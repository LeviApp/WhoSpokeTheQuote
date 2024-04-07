import logo from "../Images/WSTQlogo.png"
import '../SASS/Quotes.scss';
import '../SASS/QuotesGame.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import QuoteSelect from './QuoteSelect'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Loading, Button} from 'carbon-components-react'

function QuotesGame() {

    const [quotes, setQuotes] = useState([])
    const [guessQuotes, setGuessQuotes] = useState([])
    const [guessQuote, setGuessQuote] = useState({})
    const [loading, setLoading] = useState(true)
    const [score, setScore] = useState(0)

    const selectRandomQuote = async (quoteArray) => {
        let randomNum = Math.floor(Math.random() * (quoteArray.length));
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
            setQuotes(updatedQuotes)

            const selectedQuote = await selectRandomQuote(guessedQuotes);
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

    const restartGame = async () => {
        let resetQuotes = quotes.map(q => ({...q, correct: null}))
        setQuotes(resetQuotes)
        setGuessQuotes(resetQuotes)
        setScore(0);
        const selectedQuote = await selectRandomQuote(resetQuotes)
        if (selectedQuote) {
            setGuessQuote(selectedQuote)
        }
    }


    useEffect(() => {
        axios.get("https://quotesdjango.onrender.com/quotes/")
        .then( async res => {
            let newData = res.data.map(quote => ({ ...quote, correct: null }))
            setQuotes(newData)
            setGuessQuotes(res.data)
            const selectedQuote = await selectRandomQuote(res.data)
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
            <h1 className={`hidden ${guessQuotes.length === 0 ? "gameOver" : ""}`}>CONGRATULATIONS!</h1>
            <h1 className={`hidden ${guessQuotes.length === 0 ? "gameOverBold" : ""}`}>SCORE: {score}</h1>
            <Button className={`hidden ${guessQuotes.length === 0 ? "gameOver" : ""}`} kind="tertiary" id="restart-btn" onClick={()=> restartGame()}>Restart</Button>
            <h1 className={`${guessQuotes.length === 0 ? "hidden" : ""}`}>Who spoke this quote?</h1>
            <p className={`${guessQuotes.length === 0 ? "hidden" : ""}`}>{guessQuote.text_body}</p>
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
  