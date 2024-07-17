import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../App.css';

const App = () => {
  return (
      <div className="App">

        <div className="top-grp">
          <header>
            <h1>Connor Colvill</h1>
          </header>


          <main>
            <Nav />
          </main>
        </div>

          <footer>
            <Footer />
          </footer>
      </div>
  );
};

export default App;
