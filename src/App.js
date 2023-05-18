import './App.css';
import { VscGithub } from 'react-icons/vsc';

function App() {
  return (

    <div className="App">

      <section className="hero">
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
          <img src="/images/G - Avatar.png" className="avatar" />
        </div>   
      </section>

      <section className="tech-stack">
        <img src="/logos/wordpress-logo-light.svg" className="wp-brand-logo" />
        <img src="/logos/html-logo-light.svg" className="html-brand-logo" />
        <img src="/logos/css-logo-light.svg" className="css-brand-logo" />
        <img src="/logos/js-logo-light.svg" className="js-brand-logo" />
        <img src="/logos/sass-logo-light.svg" className="sass-brand-logo" />
        <img src="/logos/tailwindcss-logo-light.svg" className="tailwindcss-brand-logo" />
        <img src="/logos/php-logo-light.svg" className="php-brand-logo" />
        <img src="/logos/reactjs-logo-light.svg" className="reactjs-brand-logo" />
        <img src="/logos/figma-logo-light.svg" className="figma-brand-logo" />
        <img src="/logos/xd-logo-light.svg" className="xd-brand-logo" />
        <img src="/logos/ps-logo-light.svg" className="ps-brand-logo" />
      </section>

    </div>
  );
}

export default App;