import { Theme } from '@radix-ui/themes';
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <div>
        <Header>
            <Nav currentPage={currentPage} />
        </Header>
        <main>
            <Page currentPage={currentPage} />
        </main>
        <Footer />
        </div>
    </Theme>
  );
}

export default App;
