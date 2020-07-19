import React, { useContext } from 'react';

import ThemeContext from './../style-root/ThemeContext';

import Card from './../components/Card';
import SiteHeader from './components/site-header';
import Form from './../components/form';
import Input from './../components/form/Input';
import Row from './../components/grid/Row';
import Column from './../components/grid/Column';
import Container from './../components/grid/Container';
import ButtonGroup from './../components/button/ButtonGroup';
import Button from './../components/button/Button';

function ThemePicker({ themeContext }) {
  return (
    <Card title="Theme Picker">
      <ButtonGroup size="sm" block>
        <Button onClick={() => themeContext.setTheme('first')} label="first" size="sm" />
        <Button onClick={() => themeContext.setTheme('second')} label="second" size="sm" />
        <Button onClick={() => themeContext.setTheme('third')} label="third" size="sm" />
      </ButtonGroup>
    </Card>
  );
}

function App() {

  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <SiteHeader title="Site Header"/>

      <Container>
        <Row>
          <Column>
            <hr></hr>
            <ThemePicker themeContext={themeContext} />

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
