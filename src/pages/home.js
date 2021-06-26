import React from 'react';
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Icons from '../components/icons';

function Home(props) {
  return (
    <section>
      <Container>
        
        <Row> 
          <Col>I'm Ian</Col>
          <Col>About</Col>
        </Row>
        <Row><Icons></Icons></Row>
      </Container>
    </section>
  );
}
export default Home;

