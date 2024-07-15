import { Theme } from '@radix-ui/themes';
import Header from './components/header';
import Footer from './components/footer';
import Current from './components/current';
import './App.css';
// import { useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();

  return (

    <Theme accentColor="mint" grayColor="gray" panelBackground="solid" scaling="100%" radius="full">
      <div>
        <Header />
      <main>
        <Current location={location} />
      </main>
        <Footer />
      </div>
    </Theme>
  )
}

export default App
