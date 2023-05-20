import './App.css';
import { VscGithub } from 'react-icons/vsc';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (

      <div className="App">
      {/* START APP */}
        <section className="hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={8} md={12} sm={12} xs={12}>
                <h1>Hello there!</h1><br/>
                <h3>I'm G, a front-end web developer / designer based in the Philippines.</h3>
                    <Row className="socials align-items-center justify-content-xs-center">
                      <Col lg={3} md={8} sm={7} xs={8} >
                        <Button variant="light" href="#">Download resume</Button>
                      </Col>
                      <Col className="social-icons" lg={3} md={4} sm={5} xs={4}>
                        <a href="https://github.com/gacasio96" target="_blank"><VscGithub /></a>
                      </Col>
                    </Row>
              </Col>
              <Col lg={4} md={12} sm={12}>
                <div className="image">
                  <img src="/images/G - Avatar.png" className="avatar" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="tech-stack">
          <Container>
            <Row className="align-items-center">
              <Col lg={12} md={12} sm={12} xs={11}>
                <Row className="align-items-center justify-content-center">
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/wordpress-logo-light.svg" className="wp-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/html-logo-light.svg" className="html-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/css-logo-light.svg" className="css-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2} >
                    <img src="/logos/js-logo-light.svg" className="js-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/sass-logo-light.svg" className="sass-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/tailwindcss-logo-light.svg" className="tailwindcss-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/php-logo-light.svg" className="php-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/reactjs-logo-light.svg" className="reactjs-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/figma-logo-light.svg" className="figma-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/xd-logo-light.svg" className="xd-brand-logo" />
                  </Col>
                  <Col md={1} sm={2} xs={2}>
                    <img src="/logos/ps-logo-light.svg" className="ps-brand-logo" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      {/* END APP */}
      </div> 

      
      
    
    
  );
}

export default App;