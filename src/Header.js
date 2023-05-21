import './Header.css';
import { Divide as Hamburger } from 'hamburger-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
  <header>
    <Container>
      <Row>
        <Col>
            <Hamburger rounded />
        </Col>
      </Row>
    </Container>
  </header>
  );
}

export default Header;