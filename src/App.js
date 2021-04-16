import React from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Home */}

      <Router>
       <Header />

      <Switch>

        <Route path='/search'>
        <SearchPage />
        </Route>

        <Route path='/'>
         <Home />
        </Route>
       
      </Switch>
       


       <Footer />
      </Router>
       



          {/* Header */}

          {/* Banner */}
            {/* Search Date */}

          {/* Cards */}

          {/* Footer */}

      {/* Search Page */}
         {/* Header */}

    </div>
  );
}

export default App;
