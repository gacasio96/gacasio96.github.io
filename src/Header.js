import './Header.css';
import { Divide as Hamburger } from 'hamburger-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
  <header>
    <Container fluid>
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