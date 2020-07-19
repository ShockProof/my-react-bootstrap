import React from 'react';

import { Row as BootstrapRow } from 'react-bootstrap';

function Row({ children }) {
  return (
    <BootstrapRow>
      {children}
    </BootstrapRow>
  );
}

export default Row;
