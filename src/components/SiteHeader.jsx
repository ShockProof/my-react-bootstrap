import React from 'react';

import { Row, Col } from 'react-bootstrap';

function SiteHeader({ title }) {
  return (
    <div className="siteHeader">
      <Row>
        <Col>
          <h3> {title} </h3>
        </Col>
      </Row>
    </div>
  );
}

export default SiteHeader;