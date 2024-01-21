import styled from 'styled-components'
import GlobalStyle from './theme/GlobalStyle'
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Test from "./components/Test"

const Container = styled.div`
  height: 100vh;
  width:100%;
  scrollbar-width: none;
  color: #fff;
  background: url("./img/codioful-formerly-gradienta-t-Rt42Wl1RQ-unsplash.jpg");
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  ::-webkit-scrollbar {
    width: 7px; 
  }
  ::-webkit-scrollbar-track {
    background: #333333;
      
  }
  ::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius:20px;
  }
`
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;