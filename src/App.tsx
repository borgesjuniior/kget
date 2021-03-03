import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Button } from './components/Button';
 
function App() {
  return (
    <>
      <Header/>
      <section>

        <div className="container">

          <Profile />

          <div className="image-download">
            <img src="https://github.com/borgesjuniior.png" alt="Profile" />
            <Button>Download</Button>
          </div>
          
        </div>
      </section>
      <GlobalStyle />
    </>
  );
}

export default App;
