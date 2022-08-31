import logo from "../Images/WSTQlogo.png"
import '../SASS/SingleQuote.scss';
import {Link} from 'react-router-dom';
import React, {useReducer, useEffect} from 'react';
import {Button, Modal} from 'carbon-components-react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
function SingleQuote(props) {

    const {id} = useParams();
    const history = useHistory();

    const initialState = {
        quote: {},
        loading: true,
        deleting: false
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'SUCCESS':
            return {
                loading: false,
                quote: action.payload
            }

            case 'DELETING':
            return {
                loading: false,
                deleting: true,
                quote: action.payload
            }

            case 'CANCEL':
            return {
                loading: false,
                deleting: false,
                quote: action.payload
            }


            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const deleteQuote = () => {
        console.log('inside function')
        axios.delete(`https://quotesdjango.up.railway.app/quotes/${id}/`)
        .then(response => {
          console.log('quote was successfully deleted')
          history.goBack()
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log(history, 'This is history')
        axios.get(`https://quotesdjango.up.railway.app/quotes/${id}`)
        .then( res => {
            dispatch({type: 'SUCCESS', payload: res.data})
        })
        .catch(err => console.log(err, 'error'))
        // Levi Appenfelder 05/15/2021 - the return value unmounts the component
        return () => {
            console.log('unmounted')
        }
        // Levi Appenfelder 05/15/2021 - the empty array causes useEffect to run only once
    }, [state.loading])
    return (
        <div className='singleContainer'>
            <section>
                <Link to={
                    {
                        pathname: `/quotes/edit/${id}`,
                        state: state.quote
                    }
                }>
                <Button kind="tertiary" id="button-edit">Edit</Button>
                </Link>
                <Button kind="tertiary" id="button-delete" onClick={() => dispatch({type: 'DELETING', payload: state.quote})
}>Delete</Button>
            </section>
            <Modal
                open={state.deleting}
                size='xs'
                primaryButtonText="Delete"
                onRequestClose={()=>dispatch({type: 'CANCEL', payload: state.quote})}
                onRequestSubmit={()=>deleteQuote()}
                secondaryButtonText="Cancel"
                danger={true}>
                <p style={{color: '#1062FE', marginTop: '30px',  width: '100%'}}>
                    Are you sure you want to delete this quote?
                </p>
            </Modal>
            <img src={state.quote.img_url} />
            <h2>{state.quote.title}</h2>
            <p>{state.quote.text_body}</p>
        </div>
    );
}

export default SingleQuote;
