import React from 'react';

// Importerer vores fontawesome
import "./components/FontAwesomeIcons/FontAwesome"
import {Route} from 'react-router-dom';

// Importerer CSS
import './App.css';

// Components
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Products from './components/layout/Products';
import Xproduct from './components/layout/Xproduct';
import Contact from './components/layout/Contact';
import Login from './components/layout/Login';
import Searchresult from './components/layout/Searchresult';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/produkter" component={Products} />
          <Route exact path="/produkt/:produktID" component={Xproduct} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/soegning/:soegeordet?" component={Searchresult} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;