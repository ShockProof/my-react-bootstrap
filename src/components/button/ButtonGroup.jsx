import React from 'react';

import { ButtonGroup as BootstrapButtonGroup } from 'react-bootstrap';

function ButtonGroup({ children }) {
  return (
    <BootstrapButtonGroup>
      {children}
    </BootstrapButtonGroup>
  );
}

export default ButtonGroup;
