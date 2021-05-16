import logo from "../Images/WSTQlogo.png"
import '../SASS/SingleQuote.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import React, {useReducer, useEffect} from 'react';
import { Button } from 'carbon-components-react';
import axios from 'axios'
function SingleQuote(props) {

    const initialState = {
        quote: {},
        loading: true
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'SUCCESS':
            return {
                loading: false,
                quote: action.payload
            }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://quotesdjango.herokuapp.com/quotes/14")
        .then( res => {
            dispatch({type: 'SUCCESS', payload: res.data})
        })
        .catch(err => console.log(err, 'error'))
        // Levi Appenfelder 05/15/2021 - the return value unmounts the component
        return () => {
            console.log('unmounted')
        }
        // Levi Appenfelder 05/15/2021 - the empty array causes useEffect to run only once
    }, [])
    return (
        <div className='singleContainer'>
            <img src={state.quote.img_url} />
            <h2>{state.quote.title}</h2>
            <p>{state.quote.text_body}</p>
        </div>
    );
}

export default SingleQuote;
