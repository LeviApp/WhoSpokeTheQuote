
import logo from "../Images/WSTQlogo.png"
import '../SASS/Nav.scss';
import {NavLink, Link} from 'react-router-dom';
import {Tabs, Tab, Button} from 'carbon-components-react'
function Nav() {
    return (
        <nav className="nav">
            <img src={logo}></img>
            <section>
                <NavLink activeClassName="selected" className='navlink' to="/quotes">
                    View Quotes
                </NavLink>
                <NavLink activeClassName="selected" className='navlink' to="/new">
                    Add Quote
                </NavLink>
                {/* <Tabs>
                    <Tab id="tab-1" to="/quotes" label="View Quotes"></Tab>
                    <Tab id="tab-2" to="/new" label="Add Quote"></Tab>
                </Tabs> */}
            </section>
        </nav>
    );
  }
  
  export default Nav;
  