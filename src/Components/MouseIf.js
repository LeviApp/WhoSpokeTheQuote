import logo from "../Images/WSTQlogo.png"
import '../SASS/Quotes.scss';
import {BrowserRouter as NavLink} from 'react-router-dom';
import Quotes from './Quotes'
import React, {useState, useEffect} from 'react';

function MouseIf() {

    const [display, setDisplay] = useState(true)

    // useEffect(() => {
    //     console.log('effect changed')
    //     window.addEventListener('mousemove', coord)

    // }, [])
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
            {display && <Quotes />}
        </div>
    );
  }
  
  export default MouseIf;
  