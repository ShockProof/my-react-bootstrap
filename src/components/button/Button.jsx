import React from 'react';

import { Button as BootstrapButton } from 'react-bootstrap';

function Button({ onClick, label, variant, size, type }) {
  return (
    <BootstrapButton
      onClick={onClick}
      variant={variant}
      size={size}
      type={type}
    >
      {label}
    </BootstrapButton>);
}

export default Button;
