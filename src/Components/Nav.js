
import logo from "../Images/WSTQlogo.png"
import '../SASS/Nav.sass';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <img src={logo}></img>
            <section>
                <NavLink to="/quotes" activeClassName='selected'>
                <h1>View Quotes</h1>
                </NavLink>
                <NavLink to="/new" activeClassName='selected'>
                <h1>Add Quote</h1>
                </NavLink>
            </section>

        </nav>
    );
  }
  
  export default Nav;
  