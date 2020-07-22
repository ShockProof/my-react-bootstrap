import React from 'react';

import Card from '@design-lib//card/Card';
import Form from '@design-lib/form';
import Input from '@design-lib/form/Input';
import Row from '@design-lib/grid/Row';
import Column from '@design-lib/grid/Column';
import Container from '@design-lib/grid/Container';
import Button from '@design-lib/button/Button';

import SiteHeader from '@ui-v1-components/site-header';
import ThemePicker from '@ui-v1-components/theme-picker';

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
