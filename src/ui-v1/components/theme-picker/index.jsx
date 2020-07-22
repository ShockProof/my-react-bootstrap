import React, { useContext } from 'react';

import ThemeContext from './../../../style-root/ThemeContext';

import Card from '@design-lib/card/Card';
import ButtonGroup from '@design-lib/button/ButtonGroup';
import Button from '@design-lib/button/Button';

function ThemePicker() {

  const themeContext = useContext(ThemeContext);

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

export default ThemePicker;
