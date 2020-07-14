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
              <Button size="sm" variant="danger">Danger</Button>
            </Card>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label size="sm">Email address</Form.Label>
                <Form.Control size="sm" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Form.Group controlId="formBasicTextarea">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="primary" type="submit"> Submit </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
