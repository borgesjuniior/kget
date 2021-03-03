import { Header } from './components/Header';
import { Profile } from './components/Profile';
import GlobalStyle from './styles/global';
 
function App() {
  return (
    <>
      <Header/>
      <section>
        <div className="container">
          <Profile />

        </div>
      </section>
      <GlobalStyle />
    </>
  );
}

export default App;
