import styled from 'styled-components'
import GlobalStyle from './theme/GlobalStyle';
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"
import Contact from "./components/Contact"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior:smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background: url("./img/codioful-formerly-gradienta-t-Rt42Wl1RQ-unsplash.jpg");
  background-fit:cover;
  background-attachment: fixed;
  background-position:center;
  &::-webkit-scrollbar{
    display:none;
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