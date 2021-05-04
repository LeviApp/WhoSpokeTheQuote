import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import {Route} from 'react-router-dom';
import NewQuote from './Components/NewQuote';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/quotes" render={(props) =>  <Quotes />} />
      <Route exact path="/new" render={(props) =>  <NewQuote />} />

    </div>
  );
}

export default App;
