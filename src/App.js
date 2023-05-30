import './App.css';
import { VscGithub } from 'react-icons/vsc';
import { BsDownload, BsArrowRightCircle, BsArrowUpRight } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (

      <div className="App">
      {/* START APP */}
        <section id="home" className="hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={8} md={12} sm={12} xs={12}>
                <h1>Hello there!</h1><br/>
                <h3>I'm G, a web developer / designer based in the Philippines.</h3>
                    <Row className="hero-links align-items-center justify-content-xs-center">
                      <Col lg={4} md={6} sm={6} xs={12} >
                        <Button variant="light" href="#">Download resume &nbsp;<BsDownload /></Button>
                      </Col>
                      <Col className="social-icons" lg={3} md={6} sm={6} xs={12}>
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
        <section id="tech-stack" className="tech-stack">
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
        <section id="work" className="portfolio">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="pf-blurb">
                  <h2>Featured Work</h2><br/>
                  <p>As an experienced web developer, I have had the opportunity to work on various projects that involve designing, developing, and maintaining websites. With a strong foundation in web development, I specialize in utilizing the WordPress platform to create dynamic, functional, and visually appealing websites.</p>
                </div>
              </Col>
            </Row>
            <Row id="hiblaltd" className="align-items-center pf-item">
              <Col lg={6} md={12} sm={12} xs={12}>
                <div className="pf-content">
                <h2>Hibla Ltd</h2>
                <p>The primary objective of this project was to establish an attractive and user-friendly online store using the WordPress content management system and the WooCommerce plugin. The client desired a website that could effectively showcase their products, facilitate seamless browsing and purchasing experiences for customers, and integrate essential e-commerce functionality.</p>
                <a className="pf-link" href="https://www.hiblaltd.com/" target="_blank">View live website &nbsp;<BsArrowUpRight /></a>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <div className="pf-image-wrap">
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
      {/* END APP */}
      </div> 

  );
}

export default App;