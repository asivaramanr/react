import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Root from './pages';
import Request from './pages/request';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
      
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Root} />
        <Route path="/request" component={Request} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign-up" component={Login} />
      </Switch>
    </Router>
    <header className="App-header">
    <footer className="App-footer"> 
        © HCI Labs Engineering 
        </footer>
      </header>
      
    </div>
  );
}

export default App;
