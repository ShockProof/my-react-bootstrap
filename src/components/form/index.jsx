import React from 'react';

import { Form as BootstrapForm } from 'react-bootstrap';

function Form({ children }) {
  return <BootstrapForm> {children} </BootstrapForm>;
}

export default Form;
