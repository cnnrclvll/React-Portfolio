import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

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
