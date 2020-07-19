import React from 'react';

import { Col } from 'react-bootstrap';

function Column({ children }) {
  return (
    <Col>
      {children}
    </Col>
  );
}

export default Column;
