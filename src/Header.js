import './Header.css';
import { Divide as Hamburger } from 'hamburger-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useState } from 'react';

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
  <header>
    <Container>
      <Row>
        <Col className="main-header">
            <Hamburger rounded toggled={isOpen} toggle={setOpen} />
            <div className="menu-nav">
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
  );
}

export default Header;