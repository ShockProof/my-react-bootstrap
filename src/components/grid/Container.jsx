import React from 'react';

import { Container as BootstrapContainer } from 'react-bootstrap';

function Container({ children }) {
  return (
    <BootstrapContainer>
      {children}
    </BootstrapContainer>
  );
}

export default Container;
