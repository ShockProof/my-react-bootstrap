import React from 'react';

import Card from '../components/card/Card';
import SiteHeader from './components/site-header';
import Form from './../components/form';
import Input from './../components/form/Input';
import Row from './../components/grid/Row';
import Column from './../components/grid/Column';
import Container from './../components/grid/Container';
import Button from './../components/button/Button';

import ThemePicker from './components/theme-picker';

function App() {

  return (
    <div>
      <SiteHeader title="Site Header"/>

      <Container>
        <Row>
          <Column>
            <hr></hr>
            <ThemePicker />

            <Card title="Card TItle">
              <p> Some quick example text to build on the card title and make up the bulk of
              the card's content. </p>
              <Button variant="primary" label="Go somewhere"/>
            </Card>

            <Card>
              <Button size="sm" variant="primary" label="Primary" /> {' '}
              <Button variant="info" label="Info" /> {' '}
              <Button size="lg" variant="danger" label="Danger" />
            </Card>
          </Column>
        </Row>

        <Row>
          <Column>
            <Card>
              <Form>
                <Input textarea label="Email address" type="email" placeholder="Enter email"
                  mutedText="We'll never share your email with anyone else."/>
                <Input label="Password" type="password" placeholder="Password"/>
                <Button variant="primary" type="submit" label="Submit" />
              </Form>
            </Card>
          </Column>

          <Column>
            <Card>
              <Form>
                <Input horizontal label="Name" type="text" placeholder="Enter name"/>
                <Input horizontal label="Example textarea" textarea />
                <Button variant="primary" type="submit" size="sm" label="Primary small" />
              </Form>
            </Card>
          </Column>
        </Row>

      </Container>
    </div>
  );
}

export default App;
