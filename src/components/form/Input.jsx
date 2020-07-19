import React from 'react';

import { Form as BootstrapForm, Row, Col } from 'react-bootstrap';

function InputVertical({ label, type, placeholder, mutedText, textarea }) {

  return (
    <BootstrapForm.Group>

      <BootstrapForm.Label> {label} </BootstrapForm.Label>

      <BootstrapForm.Control
        as={textarea ? 'textarea' : 'input'}
        type={type}
        placeholder={placeholder}
      />

      { mutedText &&
        <BootstrapForm.Text
          className="text-muted"
        >
          {mutedText}
        </BootstrapForm.Text>
      }

    </BootstrapForm.Group>
  );
}

function InputHorizontal({ label, type, placeholder, mutedText, textarea }) {

  return (
    <BootstrapForm.Group as={Row}>

      <BootstrapForm.Label column sm="4" size="sm"> {label} </BootstrapForm.Label>

      <Col
        sm="8"
        style={{paddingTop: 7}}
      >

        <BootstrapForm.Control
          size="sm"
          as={textarea ? 'textarea' : 'input'}
          type={type}
          placeholder={placeholder}
        />

        { mutedText &&
          <BootstrapForm.Text className="text-muted">
            {mutedText}
          </BootstrapForm.Text>
        }

      </Col>
    </BootstrapForm.Group>
  );
}

function Input({ horizontal, ...props}) {
  return horizontal ? <InputHorizontal {...props} /> : <InputVertical {...props} />
}

export default Input;
