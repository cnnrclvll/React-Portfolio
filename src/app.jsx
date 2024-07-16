import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
      <div className="App">

        <header>
          <h1>CMC</h1>
        </header>


          <main>
            <Nav />
          </main>


        <Footer />
      </div>
  );
};

export default App;
