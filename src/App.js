import './App.css';
import { Divide as Hamburger } from 'hamburger-react';
import { VscGithub } from 'react-icons/vsc';

function App() {
  return (

    const [isOpen, setOpen] = useState(false);

    <div className="App">

      <header className="App-header">
        <Hamburger rounded onToggle={toggled => {
          if (toggled) {
            // open a menu
            
          } else {
            // close a menu
          }
        }} />

        <div className="nav-menu">
          nav menu
        </div>
      </header>

      <section className="App-hero">
        <div className="content">
          <h1>Hello there!</h1><br/>
          <h3>I'm G, a front-end web developer / designer based in the Philippines.</h3>
          <div className="socials">
            <div className="social-icons">
              <a href="https://github.com/gacasio96" target="_blank"><VscGithub /></a>
            </div>            
            <button href="#">Download resume</button>
          </div>
        </div>
        <div className="image">
          <img src="/G - Avatar.png" className="avatar" />
        </div>   
      </section>

    </div>
  );
}

export default App;