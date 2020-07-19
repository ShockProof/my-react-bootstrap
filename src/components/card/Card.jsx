import React from 'react';

import { Card as BootstrapCard } from 'react-bootstrap';

function Card({title, children}) {
  return (
    <BootstrapCard className="bg-dark shockproof-card">
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title className="text-primary"> {title} </BootstrapCard.Title>}
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
