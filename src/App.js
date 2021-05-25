import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import {Route, Redirect} from 'react-router-dom';
import NewQuote from './Components/NewQuote';
import Quotes from './Components/Quotes';
import MouseIf from './Components/MouseIf';
import SingleQuote from './Components/SingleQuote';
import EditQuote from './Components/EditQuote';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" render={(props) =>  <Redirect to="/quotes" />} />
      <Route exact path="/quotes" render={(props) =>  <Quotes />} />
      <Route exact path="/new" render={(props) =>  <NewQuote />} />
      <Route exact path="/quotes/:id" render={(props) =>  <SingleQuote />} />
      <Route exact path="/hooks" render={(props) =>  <MouseIf />} />
      <Route exact path="/quotes/edit/:id" render={(props) =>  <EditQuote />} />

    </div>
  );
}

export default App;
