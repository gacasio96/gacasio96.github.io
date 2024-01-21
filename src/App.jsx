import styled from 'styled-components'
import GlobalStyle from './theme/GlobalStyle'
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"
import Contact from "./components/Contact"

const Container = styled.div`
  height: 100%;
  min-height: 100%;
  width:100%;
  color: #fff;
  background: url("./img/codioful-formerly-gradienta-t-Rt42Wl1RQ-unsplash.jpg");
  background-size:cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
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