import logo from "../Images/WSTQlogo.png"
import '../SASS/Quote.scss';
import React, {useState} from 'react';
import { Button, Modal } from 'carbon-components-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Quote(props) {


    return (
        <div className="singleQuote">
            <img src={props.url} alt=""></img>
            <section>
            <h2>{props.author}</h2>
            <h4>{props.quote}</h4>
            <div className="quoteButtons">
            <Link className="quoteLink" key={`link-${props.ID}`} to={`/quotes/${props.originalID}`}>
            <Button kind="tertiary" id="open-button">Open</Button>
            </Link>
            <Link className="quoteLink" to={
                    {
                        pathname: `/quotes/edit/${props.ID}`,
                        state: props.total
                    }
                }>
            <Button className="otherButtons" kind="tertiary" id="edit-button">Edit</Button>
            </Link>
            <Button onClick={()=> props.cancelDelete(true, props.originalID)}className="otherButtons" kind="tertiary" id="button-delete">Delete</Button>
            </div>
            </section>

            <Modal
                open={props.deleting}
                size='xs'
                id="modal"
                primaryButtonText="Delete"
                onRequestClose={()=> props.cancelDelete(false, props.originalID)}
                onRequestSubmit={()=>props.deleteQuote(props.ID)}
                secondaryButtonText="Cancel"
                danger={true}>
                <p style={{color: '#1062FE', marginTop: '30px',  width: '100%'}}>
                    Are you sure you want to delete this quote?
                </p>
            </Modal>
        </div>
    );
  }
  
  export default Quote;
  