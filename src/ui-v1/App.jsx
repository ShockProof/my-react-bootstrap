import React, { useContext } from 'react';

import ThemeContext from './../style-root/ThemeContext';

import { Container, Row, Col, Button, ButtonGroup, Form } from 'react-bootstrap';

import Card from './../components/Card';
import SiteHeader from './../components/SiteHeader';

function App() {

  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <SiteHeader title="Site Header"/>

      <Container>
        <Row>
          <Col>
            <hr></hr>

            <ButtonGroup size="sm" block>
              <Button onClick={() => themeContext.setTheme('first')}>first</Button>
              <Button onClick={() => themeContext.setTheme('second')}>second</Button>
              <Button onClick={() => themeContext.setTheme('third')}>third</Button>
            </ButtonGroup>

            <Card title="Card TItle">
              <p> Some quick example text to build on the card title and make up the bulk of
              the card's content. </p>
              <Button variant="primary">Go somewhere</Button>
            </Card>

            <Card>
              <Button size="sm" variant="primary">Primary</Button> {' '}
              <Button variant="info">Info</Button> {' '}
              <Button size="lg" variant="danger">Danger</Button>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success" type="submit"> Submit </Button>
              </Form>
            </Card>
          </Col>

          <Col>
            <Card>
              <Form>
                <Form.Group as={Row} controlId="formBasicName">
                  <Form.Label column sm="4" size="sm">Name</Form.Label>
                  <Col sm="8" style={{paddingTop: 7}}>
                    <Form.Control size="sm" type="text" placeholder="Enter name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicTextarea">
                  <Form.Label column sm="4" size="sm">Example textarea</Form.Label>
                  <Col sm="8" style={{paddingTop: 7}}>
                    <Form.Control as="textarea" rows="3" size="sm"/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicCheckbox">
                  <Form.Label column sm="4" size="sm">Example Checker</Form.Label>
                  <Col sm="8" style={{paddingTop: 7}}>
                    <Form.Check type="checkbox" label="Check me out" size="sm" />
                  </Col>
                </Form.Group>

                <Button variant="primary" type="submit" size="sm"> Primary small </Button>
              </Form>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
