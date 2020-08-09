import React from 'react';

import {
  Button,
  Card,
  Column,
  Container,
  Form,
  Input,
  Row,
} from '@design-lib';

import SiteHeader from '@ui-v1-components/site-header';
import ThemePicker from '@ui-v1-components/theme-picker';

import AceEditorWrapper from './ace-editor-wrapper';

function App() {

  return (
    <div>
      <SiteHeader title="Site Header"/>

      <Container>
        <Row>
          <Column>
            <div style={{height: 16}}></div>
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

        <AceEditorWrapper />

      </Container>
    </div>
  );
}

export default App;
